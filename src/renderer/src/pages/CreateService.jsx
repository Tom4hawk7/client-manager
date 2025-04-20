import { useParams } from 'react-router'
import { redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

export default function CreateService() {
  const client_id = useParams().client_id
  const data = { client_id: client_id }
  return <ServiceForm data={data} text="Create" disable={true} />
}

// export const

export const createServiceAction = async ({ request }) => {
  const service = Object.fromEntries(await request.formData())
  await window.service.create(service)
  return redirect('..')
}
