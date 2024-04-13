import { Form, Fieldset, Input } from '../components/Form'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/css/form.css'

export default function ClientForm() {
  const [operation, setOperation] = useState('')
  const [clientData, setClientData] = useState('')

  const { id } = useLocation().state || {}

  useEffect(() => {
    if (id) {
      window.database.getClient(id).then(setClientData)
      setOperation

      // window.database.getClient(id).then((value) => {
      //   console.log(value)
      // })

      // set clientData
      // set operation to update
    }
  })
  // console.log(id)

  // const createClient = (input) => {
  //   window.database.submitClient(input)
  // }

  return (
    <Form databaseOperation={operation}>
      <Fieldset legend="Client">
        <Input label="Name" name="client_name" defaultValue={clientData.name} />
        <Input label="Date of birth" name="dob" type="date" defaultValue={clientData.dob} />
        <Input label="School" name="dob" defaultValue={clientData.school} />
        <Input label="Address" name="address" defaultValue={clientData.address} />
        <Input
          label="Participant Number"
          name="participant_number"
          defaultValue={clientData.participant_number}
        />
      </Fieldset>
      <Fieldset legend="Parent">
        <Input label="Name" name="parent_name" defaultValue={clientData.parent} />
        <Input label="Email" name="parent_email" defaultValue={clientData.email} />
        <Input label="Phone number" name="phone" type="tel" defaultValue={clientData.phone} />
      </Fieldset>
    </Form>
  )
}
