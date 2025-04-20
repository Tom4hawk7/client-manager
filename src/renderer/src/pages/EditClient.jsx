import { redirect, useLoaderData } from 'react-router'
import ClientForm from '../components/form/ClientForm'

export default function EditClient() {
  const data = useLoaderData()
  return <ClientForm data={data} />
}

export const editClientLoader = async ({ params }) => {
  console.log(params)
  return await window.form.read(params.client_id)
}

export const editClientAction = async ({ request }) => {
  const formData = await request.formData()
  const intent = formData.get('intent')

  formData.delete('intent')

  switch (intent) {
    case 'edit':
      const data = Object.fromEntries(formData)
      window.form.update(data)
      return redirect('..')

    case 'delete':
      const id = formData.get('id')
      window.form.delete(id)
      return redirect('../..')
  }
}
