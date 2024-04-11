import Card from './Card'
import '../assets/css/form.css'

export default function ClientForm({ databaseOperation, clientData = '' }) {
  // TODO clientData will have an attribute of client_id from the backend
  // Make sure to append it to the clienData object
  // Or figure out another way to store it in the backend so that the changes save through
  // This edge case would be for updating or viewing a client
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const clientData = Object.fromEntries(formData)

    databaseOperation(clientData)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Client</legend>

          <label>Name</label>
          <input name="client_name" defaultValue={clientData.name} />

          <label>Date of birth</label>
          <input name="dob" type="date" defaultValue={clientData.dob} />

          <label>Participant Number</label>
          <input name="participant_number" defaultValue={clientData.participant_number} />
        </fieldset>

        <fieldset>
          <legend>Address</legend>

          <label>Street</label>
          <input name="street" />

          <label>Suburb</label>
          <input name="suburb" />

          <label>State</label>
          <input name="state" />

          <label>Code</label>
          <input name="code" />
        </fieldset>

        <fieldset>
          <legend>Parent</legend>

          <label>Name</label>
          <input name="parent_name" />

          <label>Email</label>
          <input name="parent_email" />

          <label>Phone number</label>
          <input name="phone" type="tel" />
        </fieldset>

        <fieldset>
          <legend>Plan</legend>

          <label>Start Date</label>
          <input name="start_date" type="date" />

          <label>End Date</label>
          <input name="end_date" type="date" />

          <label>Budget</label>
          <input name="budget" type="number" />
        </fieldset>

        <fieldset>
          <legend>Plan Manager</legend>

          <label>Name</label>
          <input name="plan_manager_name" />

          <label>Email</label>
          <input name="plan_manager_email" type="email" />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </Card>
  )
}
