import { createHashRouter, RouterProvider } from 'react-router'
import { createClientAction } from './pages/CreateClient'
import currentDate from './assets/functions/currentDate'

import Clients from './pages/Clients'
import Services from './pages/Services'
import CreateClient from './pages/CreateClient'
import EditClient, { editClientLoader, editClientAction } from './pages/EditClient'
// use hash router
const router = createHashRouter([
  {
    path: '/',
    Component: Clients,
    // loader: () => {window.table.read()},
    loader: ({ request }) => {
      const searchParams = new URL(request.url).searchParams
      const searchName = searchParams.get('name') || ''

      return window.table.read(searchName)
    },
    children: [{ path: 'create-client', Component: CreateClient, action: createClientAction }]
    // children: [{ path: 'create-client', Component: CreateClient, action: createClientAction }]
  },
  {
    path: 'services/:id',
    Component: Services,
    loader: ({ params, request }) => {
      const searchParams = new URL(request.url).searchParams

      const description = searchParams.get('description') || ''
      const month = searchParams.get('month') || currentDate

      return window.service.readAll(params.id, month, description)
      // return window.service.readAll(params.id, currentDate)
    },
    children: [
      {
        path: 'edit-client/:id',
        Component: EditClient,
        loader: editClientLoader,
        action: editClientAction
      }
      // {
      //   path: 'edit-client/:id',
      //   Component: EditClient,
      //   loader: ({ params }) => {
      //     return window.form.read(params.id)
      //   }
      // }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
