import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import './assets/css/app.css'

import ServiceView from './pages/ServiceView'
import ClientView from './pages/ClientView'
import ClientCreate from './pages/ClientCreate'

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <NavBar />
        <section>
          <Routes>
            <Route path="/" element={<ServiceView />} />
            <Route path="/client" element={<ClientView />} />
            <Route path="/client-form" element={<ClientCreate />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}
