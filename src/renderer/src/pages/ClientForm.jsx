import { Form, Fieldset, Input } from '../components/Form'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/css/form.css'

// define create and update functions
const create = (client) => {
  window.databaseClient.createClient(client)
}

const update = (client) => {
  window.databaseClient.updateClient(client)
}

export default function ClientForm() {
  const [clientData, setClientData] = useState('')
  const { id } = useLocation().state || ''

  useEffect(() => {
    if (id) window.databaseClient.getClient(id).then(setClientData)
  }, [])

  return (
    <Form create={create} update={update} id={id}>
      <Fieldset legend="Client">
        <Input label="Name" name="client_name" defaultValue={clientData.client_name} />
        <Input label="Date of birth" name="dob" type="date" defaultValue={clientData.dob} />
        <Input label="School" name="school" defaultValue={clientData.school} />
        <Input label="Address" name="address" defaultValue={clientData.address} />
        <Input
          label="Participant Number"
          name="participant_number"
          defaultValue={clientData.participant_number}
        />
      </Fieldset>
      <Fieldset legend="Parent">
        <Input label="Name" name="parent_name" defaultValue={clientData.parent_name} />
        <Input label="Email" name="parent_email" defaultValue={clientData.parent_email} />
        <Input
          label="Phone number"
          name="parent_phone"
          type="tel"
          defaultValue={clientData.phone}
        />
      </Fieldset>
    </Form>
  )
}
