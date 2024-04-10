import { useState } from 'react'
import Card from '../components/Card'
import '../assets/css/form.css'

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    participantNumber: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.database.submitClient(formData)
  }

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" value={formData.name} onChange={handleInputChange} />

            <label htmlFor="dob">Date of birth</label>
            <input name="dob" type="date" value={formData.dob} onChange={handleInputChange} />

            <label htmlFor="participantNumber">participantNumber</label>
            <input
              name="participantNumber"
              type="text"
              value={formData.participantNumber}
              onChange={handleInputChange}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </>
  )
}
