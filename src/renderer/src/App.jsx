import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import './assets/css/app.css'

import person from './assets/svg/person.svg'
import receipt from './assets/svg/receipt.svg'

import Clients from './pages/Clients'
import Sessions from './pages/Sessions'

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <nav>
          <Link to="/">
            <img className="icon" src={person} width="36px" height="36px" />
          </Link>
          <Link to="/invoices">
            <img className="icon" src={receipt} width="36px" height="36px" />
          </Link>
        </nav>
        <section>
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/invoices" element={<Sessions />} />
          </Routes>
        </section>
      </HashRouter>
    </div>
  )
}
