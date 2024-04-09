import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import Clients from './pages/Clients'
import Invoices from './pages/Invoices'

export default function App() {
  return (
    <HashRouter>
      <div>
        <Link to="/clients">
          <p>Click me</p>
        </Link>
      </div>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </HashRouter>
  )
}
