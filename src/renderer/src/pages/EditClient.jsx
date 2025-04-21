import { data, redirect, useLoaderData } from 'react-router'
import ClientForm from '../components/form/ClientForm'

export default function EditClient() {
  const data = useLoaderData()
  return <ClientForm data={data} text="Edit" />
}

export const editClientLoader = async ({ params }) => {
  return await window.form.read(params.client_id)
}

export const editClientAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData())
  window.form.update(formData)
  return redirect('..')
}
