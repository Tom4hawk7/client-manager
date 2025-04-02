import { createHashRouter, RouterProvider } from 'react-router'
import Clients from './pages/Clients'
import Test from './pages/Test'

// use hash router
const router = createHashRouter([
  { path: '/', Component: Test, loader: () => window.client.getAll() }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
