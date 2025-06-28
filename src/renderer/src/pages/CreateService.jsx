import { useLoaderData } from 'react-router'
import { redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

export default function CreateService() {
  const data = useLoaderData()
  return <ServiceForm data={data} text="Create" disable={true} />
}

// export const
export const createServiceLoader = async ({ params }) => {
  const client_id = params.client_id
  const client_dob = await window.client.getDob(client_id)

  const default_item_number = checkItemDate(client_dob)
  return { client_id: client_id, default_item_number: default_item_number }
}

export const createServiceAction = async ({ request }) => {
  const service = Object.fromEntries(await request.formData())
  const hourly_rate = await window.store.get('hourly_rate')

  // could have the dealt with in the service class
  const hours_worked = Number(service.minutes) / 60
  service.unit_price = (hourly_rate * hours_worked).toFixed(2)

  await window.service.create(service)
  return redirect('..')
}

function checkItemDate(client_dob) {
  const date = new Date()
  console.log(client_dob)
  const yearDiff = date.getFullYear() - client_dob.getFullYear()

  let itemNumber = '15_622_0128_1_3'
  if (yearDiff < 7) itemNumber = '15_005_0118_1_3'

  return itemNumber
}
