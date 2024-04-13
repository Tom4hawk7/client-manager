import '../assets/css/form.css'

import Input from '../Components/Input'
import Fieldset from '../Components/Fieldset'
import Form from '../Components/Form'

export default function ClientForm({ databaseOperation, clientData = '' }) {
  return (
    <Form databaseOperation={databaseOperation}>
      <Fieldset legend="Client">
        <Input label="Name" name="client_name" defaultValue={clientData.name} />
        <Input label="Date of birth" name="dob" defaultValue={clientData.dob} />
        <Input label="School" name="dob" type="date" defaultValue={clientData.dob} />
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

      <fieldset>
        <legend>Plan</legend>

        <label>Start Date</label>
        <input name="start_date" type="date" defaultValue={clientData.start_date} />

        <label>End Date</label>
        <input name="end_date" type="date" defaultValue={clientData.end_date} />

        <label>Budget</label>
        <input name="budget" type="number" defaultValue={clientData.budget} />
      </fieldset>

      <fieldset>
        <legend>Plan Manager</legend>

        <label>Name</label>
        <input name="plan_manager_name" defaultValue={clientData.plan_manager_name} />

        <label>Email</label>
        <input
          name="plan_manager_email"
          type="email"
          defaultValue={clientData.plan_manager_email}
        />
      </fieldset>
    </Form>
  )
}
