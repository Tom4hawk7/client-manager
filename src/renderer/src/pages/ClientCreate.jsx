import { Form, Fieldset, Input } from '../components/Form'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/css/form.css'

export default function ClientForm() {
  // these state change together -> turn them into one object later
  const [clientData, setClientData] = useState('')
  const [operation, setOperation] = useState('')

  // this seems a bit boilerplatey, see if I can't refactor this later
  const createClient = (client) => {
    window.database.submitClient(client)
  }

  const updateClient = (client) => {
    window.database.updateClient(client)
  }

  const { id } = useLocation().state || {}

  useEffect(() => {
    if (id) {
      window.database.getClient(id).then(setClientData)
      setOperation(updateClient)
    } else {
      setOperation(createClient)
    }
  })
  return (
    <Form databaseOperation={operation} id={id}>
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
        <Input label="Phone number" name="phone" type="tel" defaultValue={clientData.phone} />
      </Fieldset>
    </Form>
  )
}
