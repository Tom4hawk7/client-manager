import { useLoaderData, redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

const hourly_rate = await window.store.get('hourly_rate')

export default function EditService() {
  const data = useLoaderData()
  return <ServiceForm data={data} text="Edit" disable={false} />
}

export const editServiceLoader = async ({ params }) => {
  const service = await window.service.read(params.service_id)

  const client_dob = await window.client.getDob(service.client_id)
  const billable_mins = Number((service.unit_price / hourly_rate) * 60).toFixed(0)

  return { ...service, client_dob, billable_mins }
}

export const editServiceAction = async ({ request }) => {
  const service = Object.fromEntries(await request.formData())
  const hourly_rate = await window.store.get('hourly_rate')
  console.log(hourly_rate)

  // could have this dealt with in the service class
  const hours_worked = Number(service.billable_mins) / 60
  service.unit_price = (hourly_rate * hours_worked).toFixed(2)

  window.service.update(service)
  return redirect('..')
}
