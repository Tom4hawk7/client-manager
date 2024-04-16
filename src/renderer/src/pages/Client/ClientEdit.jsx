import { useEffect, useState } from 'react'
import { getFormData, FormContextProvider } from '../../components/forms/Form'
import { useLocation } from 'react-router-dom'
import ClientForm from '../../components/forms/ClientForm'

export default function ClientEdit() {
  const [clientData, setClientData] = useState('')
  const { id } = useLocation().state || ''

  useEffect(() => {
    window.client.get(id).then(setClientData)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = getFormData(event)
    data['id'] = id

    window.client.update(data)
  }

  return (
    <FormContextProvider value={handleSubmit}>
      <ClientForm clientData={clientData} />
    </FormContextProvider>
  )
}
