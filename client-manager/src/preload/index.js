import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('client', {
  create: (clientData) => ipcRenderer.invoke('client-create', clientData),
  getTable: () => ipcRenderer.invoke('client-get-table'),
  getForm: (clientId) => ipcRenderer.invoke('client-get-form', clientId),
  update: (clientData) => ipcRenderer.send('client-update', clientData),
  remove: (clientId) => ipcRenderer.send('client-remove', clientId)
})

// have to specify a clientId with getTable later
contextBridge.exposeInMainWorld('service', {
  // create: (serviceData) => ipcRenderer.invoke('service-create', serviceData),
  getTable: () => ipcRenderer.invoke('service-get-table')
  // getForm: (serviceId) => ipcRenderer.invoke('client-get-form', serviceId),
  // update: (serviceData) => ipcRenderer.send('service-update', serviceData),
  // remove: (serviceId) => ipcRenderer.send('service-remove', serviceId)
})
