import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('database', {
  submitClient: (client) => ipcRenderer.send('submit-client', client)
})
