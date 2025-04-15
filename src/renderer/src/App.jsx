import { createHashRouter, RouterProvider } from 'react-router'
import currentDate from './assets/functions/currentDate'

import Clients from './pages/Clients'
import Services from './pages/Services'
import ClientForm from './pages/ClientForm'

// use hash router
const router = createHashRouter([
  {
    path: '/',
    Component: Clients,
    loader: () => window.table.read()
  },
  {
    path: 'services/:id',
    Component: Services,
    loader: ({ params }) => {
      return window.service.read(params.id, currentDate)
    }
    // children: [
    //   {
    //     path: 'client',
    //     Component: ClientForm
    //   }
    // ]
  }
  // {
  //   path: '/services/:id',
  //   Component: Services,
  //   loader: ({ params }) => window.service.getAll(params.id, currentDate),
  //   children: [
  //     {
  //       path: 'client',
  //       Component: ClientForm
  //     }
  //   ]
  // }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
