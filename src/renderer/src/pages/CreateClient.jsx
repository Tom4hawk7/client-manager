import ClientForm from '../components/form/ClientForm'

// actions
const submit = (formFields) => window.form.create(formFields)

// need the state of Clients page to update when a new client is created
// perhaps through the use of a fetcher

export default function CreateClient() {
  return <ClientForm submit={submit} />
}
