import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('client', {
  getAll: () => ipcRenderer.invoke('client-get-all')
  // get: () => ipcRenderer.invoke('client-get', id),
})

// have to specify a clientId with getTable later
contextBridge.exposeInMainWorld('service', {
  getAll: (id, date) => ipcRenderer.invoke('service-get-all', id, date)
  // getAll: (id, date) => ipcRenderer.invoke('service-get-all', id, date).then((result) => result)
})

// contextBridge.exposeInMainWorld('client', {
//   create: (clientData) => ipcRenderer.invoke('client-create', clientData),
//   getTable: () => ipcRenderer.invoke('client-get-table'),
//   getForm: (clientId) => ipcRenderer.invoke('client-get-form', clientId),
//   update: (clientData) => ipcRenderer.send('client-update', clientData),
//   remove: (clientId) => ipcRenderer.send('client-remove', clientId)
// })

// contextBridge.exposeInMainWorld('service', {
//   // create: (serviceData) => ipcRenderer.invoke('service-create', serviceData),
//   // getForm: (serviceId) => ipcRenderer.invoke('client-get-form', serviceId),
//   // update: (serviceData) => ipcRenderer.send('service-update', serviceData),
//   // remove: (serviceId) => ipcRenderer.send('service-remove', serviceId)
// })
