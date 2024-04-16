import { getFormData, FormContextProvider } from '../../components/Form'
import ClientForm from './ClientForm'

const handleSubmit = (event) => {
  event.preventDefault()

  const clientData = getFormData(event)
  window.client.create(clientData)
}

export default function ClientCreate() {
  return (
    <FormContextProvider value={handleSubmit}>
      <ClientForm />
    </FormContextProvider>
  )
}
