import { useLoaderData, redirect } from 'react-router'
import ServiceForm from '../components/form/ServiceForm'

export default function EditService() {
  const data = useLoaderData()
  console.log('Data: ', data)
  return <ServiceForm data={data} text="Edit" disable={false} />
}

export const editServiceLoader = async ({ params }) => {
  return await window.service.read(params.service_id)
}

export const editServiceAction = async ({ request }) => {
  const formData = await request.formData()
  const intent = formData.get('intent')

  formData.delete('intent')

  switch (intent) {
    case 'edit':
      const data = Object.fromEntries(formData)
      window.service.update(data)
      return redirect('..')

    case 'delete':
      const id = formData.get('id')
      window.service.delete(id)
      return redirect('..')
  }
}
