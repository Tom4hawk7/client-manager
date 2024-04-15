import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './assets/css/app.css'

import ServiceView from './pages/ServiceView'
import ServiceForm from './pages/ServiceForm'

import ClientView from './pages/ClientView'
import ClientForm from './pages/ClientForm'

import PlanView from './pages/PlanView'
import PlanForm from './pages/PlanForm'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Services */}
          <Route index element={<ServiceView />} />
          <Route path="service-form" element={<ServiceForm />} />

          {/* Clients */}
          <Route path="client" element={<ClientView />} />
          <Route path="client-form" element={<ClientForm />} />

          {/* Plans */}
          <Route path="plan" element={<PlanView />} />
          <Route path="plan-form" element={<PlanForm />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
