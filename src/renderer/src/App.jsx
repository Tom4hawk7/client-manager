import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import NavBar from './Components/NavBar'
import './assets/css/app.css'

import ClientView from './pages/ClientView'
import ServiceView from './pages/ServiceView'
import CreateClient from './pages/CreateClient'

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <NavBar />
        <section>
          <Routes>
            <Route path="/client" element={<ClientView />} />
            <Route path="/client-create" element={<CreateClient />} />
            <Route path="/" element={<ServiceView />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}
