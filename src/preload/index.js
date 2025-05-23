import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('service', {
  create: (data) => ipcRenderer.send('service-create', data),
  read: (id) => ipcRenderer.invoke('service-read', id),
  readAll: (id, date, description = '') =>
    ipcRenderer.invoke('service-read-all', id, date, description),
  update: (data) => ipcRenderer.send('service-update', data),
  delete: (id) => ipcRenderer.send('service-delete', id)
})

contextBridge.exposeInMainWorld('form', {
  create: (data) => ipcRenderer.send('form-create', data),
  read: (id) => ipcRenderer.invoke('form-read', id),
  update: (data) => ipcRenderer.send('form-update', data),
  delete: (id) => ipcRenderer.send('form-delete', id)
})

contextBridge.exposeInMainWorld('client', {
  getName: (id) => ipcRenderer.invoke('client-get-name', id),
  getDob: (id) => ipcRenderer.invoke('client-get-dob', id)
})

contextBridge.exposeInMainWorld('table', {
  read: (name) => ipcRenderer.invoke('table-read', name)
})

contextBridge.exposeInMainWorld('invoice', {
  generate: (checked, month) => ipcRenderer.send('invoice-generate', checked, month),
  getId: () => ipcRenderer.invoke('invoice-get-id'),
  setId: (id) => ipcRenderer.send('invoice-set-id', id)
})

contextBridge.exposeInMainWorld('template', {
  open: () => ipcRenderer.send('template-open')
})

contextBridge.exposeInMainWorld('settings', {
  getAll: () => ipcRenderer.invoke('settings-get-all'),
  setAll: (data) => ipcRenderer.send('settings-set-all', data),
  openTemplate: () => ipcRenderer.send('settings-open-template')
})

contextBridge.exposeInMainWorld('store', {
  get: (key) => ipcRenderer.invoke('store-get', key)
})
