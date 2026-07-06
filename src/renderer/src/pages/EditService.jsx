import { useLoaderData, redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'
import { serviceName } from '../types/service'

export default function EditService() {
  const data = useLoaderData()
  return <ServiceForm data={data} text="Edit" disable={false} />
}

export const editServiceLoader = async ({ params }) => {
  const service = await window.service.read(params.service_id)
  const client_dob = await window.client.getDob(service.client_id)

  console.log("Service item number prev: ", service.item_number)

  if (service.service_type !== "DS") {
    service.item_number = service.item_number.slice(0, 15);
  }

  const prefix_length = serviceName[service.service_type].length + 2
  service.description = service.description.slice(prefix_length).trim()

  
  return { ...service, client_dob }
}

export const editServiceAction = async ({ request }) => {
  const service = Object.fromEntries(await request.formData())

  service.description = service.description.trim() === ""
    ? `${serviceName[service.service_type]}` 
    :`${serviceName[service.service_type]} - ${service.description}`;

  service.item_number = service.service_type === "DS"
    ? `${service.item_number}`
    : `${service.item_number}_${service.service_type}`

  window.service.update(service)
  return redirect('..')
}
