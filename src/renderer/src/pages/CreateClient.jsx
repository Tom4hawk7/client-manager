import ClientForm from '../components/form/ClientForm'
import { redirect } from 'react-router'

export default function CreateClient() {
  return <ClientForm />
}

export const createClientAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData())
  await window.form.create(data)
  return redirect('..')
}
