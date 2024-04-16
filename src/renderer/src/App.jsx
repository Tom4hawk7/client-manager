import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './assets/css/app.css'

import ServiceView from './pages/service/ServiceView'
import ServiceForm from './pages/service/ServiceForm'

import ClientView from './pages/client/ClientView'
import ClientCreate from './pages/client/ClientCreate'
import ClientEdit from './pages/client/ClientEdit'

import PlanView from './pages/plan/PlanView'
import PlanForm from './pages/plan/PlanForm'

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
          <Route path="/client-edit" element={<ClientEdit />} />

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
