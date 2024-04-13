import '../assets/css/form.css'

import { Form, Fieldset, Input } from '../Components/Form'

export default function ClientForm({ databaseOperation, clientData = '' }) {
  return (
    <Form databaseOperation={databaseOperation}>
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
        <Input label="Name" name="parent_name" defaultValue={clientData.parent_name} />
        <Input label="Email" name="parent_email" defaultValue={clientData.parent_email} />
        <Input label="Phone number" name="phone" type="tel" defaultValue={clientData.phone} />
      </Fieldset>
    </Form>
  )
}
