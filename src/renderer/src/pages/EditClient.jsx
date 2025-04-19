import { useLoaderData } from 'react-router'
import ClientForm from '../components/form/ClientForm'

// actions
const submit = (formFields) => window.form.update(formFields)
const remove = (id) => window.form.delete(id)

export default function EditClient() {
  const data = useLoaderData()
  return <ClientForm submit={submit} remove={remove} data={data} />
}
