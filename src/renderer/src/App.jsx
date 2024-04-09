import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import './assets/css/app.css'

import Clients from './pages/Clients'
import Invoices from './pages/Invoices'

import person from './assets/svg/person.svg'
import receipt from './assets/svg/receipt.svg'

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <nav>
          <Link to="/clients">
            <img className="icon" src={person} width="36px" height="36px" />
          </Link>
          <Link to="/invoices">
            <img className="icon" src={receipt} width="36px" height="36px" />
          </Link>
        </nav>
        <section>
          <Routes>
            <Route path="/clients" element={<Clients />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}
