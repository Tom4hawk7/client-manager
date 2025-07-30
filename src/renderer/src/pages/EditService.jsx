import { useLoaderData, redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

export default function EditService() {
  const data = useLoaderData()
  return <ServiceForm data={data} text="Edit" disable={false} />
}

export const editServiceLoader = async ({ params }) => {
  const service = await window.service.read(params.service_id)
  const client_dob = await window.client.getDob(service.client_id)

  return { ...service, client_dob }
}

export const editServiceAction = async ({ request }) => {
  const service = Object.fromEntries(await request.formData())

  const hourly_rate =
    service.service_type === 'session'
      ? await window.store.get('session_rate')
      : await window.store.get('travel_rate')

  // could have this dealt with in the service class
  const hours_worked = Number(service.minutes) / 60
  service.unit_price = (hourly_rate * hours_worked).toFixed(2)

  window.service.update(service)
  return redirect('..')
}
