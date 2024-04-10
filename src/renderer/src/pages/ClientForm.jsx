import Card from '../components/Card'
import '../assets/css/form.css'

export default function ClientForm() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const clientData = Object.fromEntries(formData)

    window.database.submitClient(clientData)
  }

  return (
    <>
      <Card>
        <form className="form-container" onSubmit={handleSubmit}>
          <fieldset className="form-container">
            <label>Name</label>
            <input name="name" type="text" />

            <label>Date of birth</label>
            <input name="dob" type="date" />

            <label>Participant Number</label>
            <input name="participantNumber" type="text" />
          </fieldset>
          <fieldset id="new" disabled className="form container">
            <label>Address</label>
            <input name="street" type="text" />

            <label></label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </>
  )
}
