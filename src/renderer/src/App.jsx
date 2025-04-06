import { createHashRouter, RouterProvider } from 'react-router'
import Clients from './pages/Clients'
import Services from './pages/Services'

const currentDate = new Date().toISOString().substring(0, 7)

// use hash router
const router = createHashRouter([
  { path: '/', Component: Clients, loader: () => window.client.getAll() },
  {
    path: '/services/:id',
    Component: Services,
    loader: ({ params }) => window.service.getAll(params.id, currentDate)
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
