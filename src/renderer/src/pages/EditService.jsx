import { useLoaderData, redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

export default function EditService() {
  const data = useLoaderData()
  return <ServiceForm data={data} text="Edit" disable={false} />
}

export const editServiceLoader = async ({ params }) => {
  return await window.service.read(params.service_id)
}

export const editServiceAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData())
  window.service.update(formData)
  return redirect('..')
}
