import { createHashRouter, RouterProvider } from 'react-router'

import Clients, { clientsLoader } from './pages/Clients'
import Services, { servicesLoader } from './pages/Services'

import CreateClient, { createClientAction } from './pages/CreateClient'
import EditClient, { editClientLoader, editClientAction } from './pages/EditClient'

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
    path: 'services/:id',
    Component: Services,
    loader: servicesLoader,
    children: [
      {
        path: 'edit-client/:id',
        Component: EditClient,
        loader: editClientLoader,
        action: editClientAction
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
