import { contextBridge, ipcRenderer } from 'electron'

// make these context bridges dataTable specific depending on how big this gets
contextBridge.exposeInMainWorld('client', {
  create: (client) => ipcRenderer.send('create-client', client),
  update: (client) => ipcRenderer.send('update-client', client),
  getAll: () => ipcRenderer.invoke('get-clients'),
  get: (id) => ipcRenderer.invoke('get-client', id),
  remove: (id) => ipcRenderer.send('remove-client', id)
})

contextBridge.exposeInMainWorld('plan', {
  create: (plan) => ipcRenderer.send('create-plan', plan),
  update: (plan) => ipcRenderer.send('update-plan', plan),
  getAll: () => ipcRenderer.invoke('get-plan'),
  get: (id) => ipcRenderer.invoke('get-client', id),
  remove: (id) => ipcRenderer.send('remove-client', id)
})
