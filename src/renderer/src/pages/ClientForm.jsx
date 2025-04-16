import { useEffect, useState } from 'react'
import { Form, Fieldset, Input } from '../components/form/Form'

// 1. update the form data to reflect changes
// 2. create the update function

export default function ClientForm({ toggleModal, id = '' }) {
  const [data, setData] = useState({})

  useEffect(() => {
    window.form.read(id).then(setData)
  }, [])

  function action(formData) {
    if (id) formData.set('id', id)
    const formFields = Object.fromEntries(formData)

    window.form.update(formFields)
    setData(formFields)
  }

  return (
    <Form action={action} data={data}>
      <Fieldset legend="Client Information">
        <Input name="client_name" label="Name" />
        <Input name="client_dob" label="Date of birth" type="date" />
        <Input name="client_address" label="Address" />
        <Input name="client_school" label="School" />
        <Input name="client_p_number" label="Participation number" />
      </Fieldset>

      <Fieldset legend="Parent Information">
        <Input name="parent_name" label="Name" />
        <Input name="parent_email" label="Email" />
        <Input name="parent_phone" label="Phone" type="tel" />
      </Fieldset>

      <Fieldset legend="Plan Information">
        <Input name="plan_start_date" label="Start date" type="date" />
        <Input name="plan_end_date" label="End date" type="date" />
        <Input name="plan_budget" label="Budget" type="number" />
      </Fieldset>

      <Fieldset legend="Plan Manager Information">
        <Input name="planmanager_name" label="Name" />
        <Input name="planmanager_email" label="Email" />
      </Fieldset>

      <div className="toolbar spread max">
        <button className="btn big" type="submit">
          Edit
        </button>

        <button className="btn " type="button" onClick={toggleModal}>
          Cancel
        </button>
      </div>
    </Form>
  )
}
