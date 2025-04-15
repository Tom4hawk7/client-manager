import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('view', {
  table: () => ipcRenderer.invoke('view-table'),
  form: (id) => ipcRenderer.invoke('view-form', id)
})

// contextBridge.exposeInMainWorld('client', {
//   getAll: () => ipcRenderer.invoke('client-get-all')
// })

contextBridge.exposeInMainWorld('plan', {
  // get: (client_id) => ipcRenderer.invoke('plan-get', client_id)
})

// have to specify a clientId with getTable later
contextBridge.exposeInMainWorld('service', {
  getAll: (id, date) => ipcRenderer.invoke('service-get-all', id, date)
  // getAll: (id, date) => ipcRenderer.invoke('service-get-all', id, date).then((result) => result)
})
