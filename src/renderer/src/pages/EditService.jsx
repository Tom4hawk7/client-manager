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
  window.service.update(service)
  return redirect('..')
}
