import { createHashRouter, RouterProvider } from 'react-router'

import Clients, { clientsLoader } from './pages/Clients'
import Services, { servicesLoader } from './pages/Services'

import CreateClient, { createClientAction } from './pages/CreateClient'
import EditClient, { editClientLoader, editClientAction } from './pages/EditClient'
import CreateService, { createServiceAction } from './pages/CreateService'
import EditService, { editServiceAction, editServiceLoader } from './pages/EditService'

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
