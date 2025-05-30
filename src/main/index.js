import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path, { dirname, join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { updateElectronApp } from 'update-electron-app'
import { copyFileSync, constants } from 'fs'
import { store } from './store'
import { fileURLToPath } from 'url'

const es_filename = fileURLToPath(import.meta.url)
const es_dirname = dirname(es_filename)

updateElectronApp()

const template = path.resolve(process.resourcesPath, 'Template.docx')
const userTemplate = path.resolve(app.getPath('userData'), 'Template.docx')

// create the template docx if it doesn't exist
try {
  copyFileSync(template, userTemplate, constants.COPYFILE_EXCL)
} catch (error) {}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(es_dirname, '../preload/index.mjs'),
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
    mainWindow.loadFile(join(es_dirname, '../renderer/index.html'))
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
import FormManager from './managers/form-manager'
import ServiceManager from './managers/service-manager'
import TableManager from './managers/table-manager'
import InvoiceManager from './managers/invoice-manager'
import SettingsManager from './managers/settings-manager'
import Client from './models/client'

// service operations
ipcMain.on('service-create', async (e, ...args) => ServiceManager.create(...args))
ipcMain.handle('service-read-all', async (e, ...args) => ServiceManager.readAll(...args))
ipcMain.handle('service-read', async (e, ...args) => ServiceManager.read(...args))
ipcMain.on('service-update', async (e, ...args) => ServiceManager.update(...args))
ipcMain.on('service-delete', async (e, ...args) => ServiceManager.delete(...args))

// form operations
ipcMain.on('form-create', (e, data) => {
  const formManager = new FormManager(data)
  return formManager.create()
})
ipcMain.handle('form-read', (e, ...args) => FormManager.read(...args))
ipcMain.on('form-update', (e, data) => new FormManager(data).update())
ipcMain.on('form-delete', (e, ...args) => FormManager.delete(...args))

// client operations
ipcMain.handle('client-get-dob', (e, ...args) => Client.getDob(...args))
ipcMain.handle('client-get-name', (e, ...args) => Client.getName(...args))

// table operations
ipcMain.handle('table-read', (e, name) => TableManager.read(name))

// invoice operations
ipcMain.on('invoice-generate', (e, ...args) => InvoiceManager.generate(...args))
ipcMain.handle('invoice-get-id', (e, ...args) => InvoiceManager.getId(...args))
ipcMain.on('invoice-set-id', (e, ...args) => InvoiceManager.setId(...args))

// get rid of this method later
ipcMain.on('template-open', (e, ...args) =>
  shell.openPath(path.resolve(app.getPath('userData'), 'Template.docx'))
)

// settings operations
ipcMain.handle('settings-get-all', (e) => SettingsManager.getAll())
ipcMain.on('settings-set-all', (e, ...args) => SettingsManager.setAll(...args))
ipcMain.on('settings-open-template', (e) => SettingsManager.openTemplate())

// store operations
ipcMain.handle('store-get', (e, ...args) => store.get(...args))
