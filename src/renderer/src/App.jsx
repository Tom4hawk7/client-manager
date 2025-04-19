import { createHashRouter, RouterProvider } from 'react-router'
import currentDate from './assets/functions/currentDate'

import Clients from './pages/Clients'
import Services from './pages/Services'
import EditClient from './pages/EditClient'
import CreateClient from './pages/CreateClient'

// use hash router
const router = createHashRouter([
  {
    path: '/',
    Component: Clients,
    loader: () => window.table.read(),
    children: [{ path: 'create-client', Component: CreateClient }]
  },
  {
    path: 'services/:id',
    Component: Services,
    loader: ({ params }) => {
      return window.service.readAll(params.id, currentDate)
    },
    children: [
      {
        path: 'edit-client/:id',
        Component: EditClient,
        loader: ({ params }) => {
          return window.form.read(params.id)
        }
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
