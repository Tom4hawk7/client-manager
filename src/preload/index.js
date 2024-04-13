import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('database', {
  submitClient: (client) => ipcRenderer.send('submit-client', client),
  getClients: () => ipcRenderer.invoke('get-clients'),
  getClient: (id) => ipcRenderer.invoke('get-client', id)
})
