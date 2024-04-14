import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './assets/css/app.css'

import ServiceView from './pages/ServiceView'
import ClientView from './pages/ClientView'
import ClientForm from './pages/ClientForm'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ServiceView />} />
          <Route path="client" element={<ClientView />} />
          <Route path="client-form" element={<ClientForm />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
