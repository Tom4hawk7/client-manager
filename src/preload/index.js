import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('service', {
  read: (id, date, description = '') => ipcRenderer.invoke('service-read', id, date, description)
})

contextBridge.exposeInMainWorld('form', {
  read: (id) => ipcRenderer.invoke('form-read', id),
  update: (data) => ipcRenderer.send('form-update', data),
  delete: (id) => ipcRenderer.send('form-delete', id)
})

contextBridge.exposeInMainWorld('table', {
  read: () => ipcRenderer.invoke('table-read')
})
