import { getFormData, FormContextProvider } from '../../components/forms/Form'
import ClientForm from '../../components/forms/ClientForm'

const handleSubmit = (event) => {
  event.preventDefault()

  const data = getFormData(event)
  window.client.create(data)
}

export default function ClientCreate() {
  return (
    <FormContextProvider value={handleSubmit}>
      <ClientForm />
    </FormContextProvider>
  )
}
