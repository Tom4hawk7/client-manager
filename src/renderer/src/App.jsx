import { createHashRouter, RouterProvider } from 'react-router'

import Clients, { clientsLoader } from './pages/Clients'
import Services, { servicesLoader } from './pages/Services'

import CreateClient, { createClientAction } from './pages/CreateClient'
import EditClient, { editClientLoader, editClientAction } from './pages/EditClient'
import CreateService, { createServiceAction, createServiceLoader } from './pages/CreateService'
import EditService, { editServiceAction, editServiceLoader } from './pages/EditService'
import Settings, { settingsAction, settingsLoader } from './pages/Settings'

const router = createHashRouter([
  {
    path: '/',
    Component: Clients,
    loader: clientsLoader,
    children: [
      {
        path: 'create-client',
        Component: CreateClient,
        action: createClientAction
      },
      {
        path: 'settings',
        Component: Settings,
        loader: settingsLoader,
        action: settingsAction
      }
    ]
  },
  {
    path: 'services/:client_id',
    Component: Services,
    loader: servicesLoader,
    children: [
      {
        path: 'edit-client/:client_id',
        Component: EditClient,
        loader: editClientLoader,
        action: editClientAction
      },
      {
        path: 'create-service',
        Component: CreateService,
        loader: createServiceLoader,
        action: createServiceAction
      },
      {
        path: 'edit-service/:service_id',
        Component: EditService,
        loader: editServiceLoader,
        action: editServiceAction
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
