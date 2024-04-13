import '../assets/css/form.css'

export default function ClientForm({ databaseOperation, clientData = '' }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const clientData = Object.fromEntries(formData)

    // might move these validations to the backend temporarily to make this a more general component
    clientData['budget'] = parseFloat(clientData['budget'])

    databaseOperation(clientData)
  }
  return (
    <form onSubmit={handleSubmit} className="hero">
      <fieldset>
        <legend>Client</legend>

        <label>Name</label>
        <input name="client_name" defaultValue={clientData.name} />

        <label>Date of birth</label>
        <input name="dob" type="date" defaultValue={clientData.dob} />

        <label>School</label>
        <input name="school" defaultValue={clientData.school} />

        <label>Address</label>
        <input name="address" defaultValue={clientData.address} />

        <label>Participant Number</label>
        <input name="participant_number" defaultValue={clientData.participant_number} />
      </fieldset>

      <fieldset>
        <legend>Parent</legend>

        <label>Name</label>
        <input name="parent_name" defaultValue={clientData.parent_name} />

        <label>Email</label>
        <input name="parent_email" defaultValue={clientData.parent_email} />

        <label>Phone number</label>
        <input name="phone" type="tel" defaultValue={clientData.phone} />
      </fieldset>

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

      <button type="submit">Submit</button>
    </form>
  )
}
