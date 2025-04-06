import { createHashRouter, RouterProvider } from 'react-router'
import Clients from './pages/Clients'

// use hash router
const router = createHashRouter([
  { path: '/', Component: Clients, loader: () => window.client.getAll() }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
