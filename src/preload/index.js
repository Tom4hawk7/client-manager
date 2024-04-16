import { contextBridge, ipcRenderer } from 'electron'

// make these context bridges dataTable specific depending on how big this gets
contextBridge.exposeInMainWorld('databaseClient', {
  createClient: (client) => ipcRenderer.send('create-client', client),
  updateClient: (client) => ipcRenderer.send('update-client', client),
  getClients: () => ipcRenderer.invoke('get-clients'),
  getClient: (id) => ipcRenderer.invoke('get-client', id),
  removeClient: (id) => ipcRenderer.send('remove-client', id)
})

contextBridge.exposeInMainWorld('databasePlan', {
  createPlan: (plan) => ipcRenderer.send('create-plan', plan),
  updatePlan: (plan) => ipcRenderer.send('update-plan', plan),
  getPlans: () => ipcRenderer.invoke('get-plan'),
  getPlan: (id) => ipcRenderer.invoke('get-client', id),
  removePlan: (id) => ipcRenderer.send('remove-client', id)
})
