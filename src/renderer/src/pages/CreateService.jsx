import { useLoaderData } from 'react-router'
import { redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

export default function CreateService() {
  const data = useLoaderData()
  return <ServiceForm data={data} text="Create" disable={true} />
}

export const createServiceLoader = async ({ params }) => {
  const client_id = params.client_id
  const client_dob = await window.client.getDob(client_id)

  const default_item_number = checkItemDate(client_dob)
  return { client_id: client_id, default_item_number: default_item_number }
}

export const createServiceAction = async ({ request }) => {
  const service = Object.fromEntries(await request.formData())
  await window.service.create(service)
  return redirect('..')
}

function checkItemDate(client_dob) {
  const date = new Date()
  const yearDiff = date.getFullYear() - client_dob.getFullYear()

  let itemNumber = '15_622_0128_1_3'
  if (yearDiff < 7) itemNumber = '15_622_0118_1_3'

  return itemNumber
}
