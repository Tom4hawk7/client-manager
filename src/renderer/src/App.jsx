import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './assets/css/app.css'

import ServiceView from './pages/Service/ServiceView'
import ServiceForm from './pages/Service/ServiceForm'

import ClientView from './pages/Client/ClientView'
import ClientCreate from './pages/Client/ClientCreate'
import ClientUpdate from './pages/Client/ClientUpdate'

import ClientForm from './pages/Client/ClientForm'

import PlanView from './pages/Plan/PlanView'
import PlanForm from './pages/Plan/PlanForm'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Services */}
          <Route index element={<ServiceView />} />
          {/* I will get rid of these old form elements soon */}
          <Route path="service-form" element={<ServiceForm />} />

          {/* Clients */}
          <Route path="client" element={<ClientView />} />
          <Route path="/client-create" element={<ClientCreate />} />
          <Route path="/client-update" element={<ClientUpdate />} />

          {/* I will get rid of these old form elements soon */}
          {/* <Route path="client-form" element={<ClientForm />} /> */}

          {/* Plans */}
          <Route path="plan" element={<PlanView />} />

          {/* I will get rid of these old form elements soon */}
          <Route path="plan-form" element={<PlanForm />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
