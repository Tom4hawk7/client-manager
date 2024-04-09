import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import './assets/css/app.css'

import person from './assets/svg/person.svg'
import receipt from './assets/svg/receipt.svg'

import ClientView from './pages/ClientView'
import SessionView from './pages/SessionView'
import ClientForm from './pages/ClientForm'

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <nav>
          <Link to="/" className="icon">
            <img src={person} width="36px" height="36px" />
          </Link>
          <Link to="/invoices" className="icon">
            <img src={receipt} width="36px" height="36px" />
          </Link>
        </nav>
        <section>
          <Routes>
            <Route path="/" element={<ClientView />} />
            <Route path="/client-form" element={<ClientForm />} />
            <Route path="/session" element={<SessionView />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}
