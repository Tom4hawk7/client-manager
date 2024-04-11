import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import './assets/css/app.css'

import ClientView from './pages/ClientView'
import SessionView from './pages/SessionView'
import CreateClient from './pages/CreateClient'

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <NavBar />
        <section>
          <Routes>
            <Route path="/" element={<ClientView />} />
            <Route path="/create-client" element={<CreateClient />} />
            <Route path="/session" element={<SessionView />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}
