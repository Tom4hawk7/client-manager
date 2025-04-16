import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.maximize()

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  // ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

// Define all event handles and emitters here
// import ServiceHandler from './handlers/FormHandler'
import FormManager from './managers/FormManager'
import ServiceManager from './managers/ServiceManager'
import TableManager from './managers/TableManager'

// look into event.returnValue

// When sending a message, the event name is the channel.
// To reply to a synchronous message, you need to set event.returnValue.

// import ServiceHandler from './handlers/ServiceHandler'
// import FormHandler from './handlers/formHandler'
// import TableHandler from './handlers/TableHandler'

// service operations
ipcMain.handle('service-read', async (e, ...args) => ServiceManager.read(...args))

// form operations
ipcMain.handle('form-read', (e, ...args) => FormManager.read(...args))
ipcMain.on('form-update', (e, data) => new FormManager(data).update())
ipcMain.on('form-delete', (e, ...args) => FormManager.delete(...args))

// table operations
ipcMain.handle('table-read', (e) => TableManager.read())

// the functions for handling queries are quite similar
// only thing different are the queries -> most of the time

// ipcMain.handle('form-update', (e, ...args) => FormManager.update(...args))

// some functions don't need invoke since they don't have anything to return
// these include: create, update, delete

// perhaps could return a value depending on whether everything worked out or not

// but for right now, just reflect the changes on the UI and expect everything to work out
// famous last words
