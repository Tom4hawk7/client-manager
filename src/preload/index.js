import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('service', {
  read: () => ipcRenderer.invoke('service-read'),
  readAll: (id, date, description = '') =>
    ipcRenderer.invoke('service-read-all', id, date, description)
})

contextBridge.exposeInMainWorld('form', {
  create: (data) => ipcRenderer.send('form-create', data),
  read: (id) => ipcRenderer.invoke('form-read', id),
  update: (data) => ipcRenderer.send('form-update', data),
  delete: (id) => ipcRenderer.send('form-delete', id)
})

contextBridge.exposeInMainWorld('table', {
  read: (name) => ipcRenderer.invoke('table-read', name)
})
