import { useEffect, useState } from 'react'
import { getFormData, FormContextProvider } from '../../components/Form'
import { useLocation } from 'react-router-dom'
import ClientForm from './ClientForm'

// export const form =
//   'SELECT Client.client_id AS id, ' +
//   'Client.name AS client_name, ' +
//   'Client.dob, ' +
//   'Client.school, ' +
//   'Client.address, ' +
//   'Client.participant_number, ' +
//   'Parent.name AS parent_name, ' +
//   'Parent.email AS parent_email, ' +
//   'Parent.phone ' +
//   'FROM Client ' +
//   'JOIN Parent ' +
//   'ON Client.client_id = Parent.client_id ' +
//   'WHERE Client.client_id = ?'

const handleSubmit = (event) => {
  event.preventDefault()

  const data = getFormData(event)
  window.client.update(data)
}

export default function ClientUpdate() {
  const [clientData, setClientData] = useState('')
  const { id } = useLocation().state || ''

  useEffect(() => {
    window.client.get(id).then(setClientData)
    console.log(id)
  }, [])

  return (
    <FormContextProvider value={handleSubmit}>
      <ClientForm clientData={clientData} />
    </FormContextProvider>
  )
}
