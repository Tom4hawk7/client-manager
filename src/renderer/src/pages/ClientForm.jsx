import { useEffect, useState } from 'react'
import { Form, Fieldset, Input } from '../components/form/Form'

export default function ClientForm({ toggleModal, id = '' }) {
  const [data, setData] = useState({})

  useEffect(() => {
    window.form.get(id).then(setData)
  }, [])

  function action(formData) {
    // const updatedData = new data()
    console.log(data)
  }

  return (
    <section>
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

        <div className="toolbar">
          <input className="btn" type="submit" value="Edit" />
          <input className="btn" type="button" value="Delete" />
          <button className="btn" onClick={() => toggleModal()}>
            Cancel
          </button>
        </div>
      </Form>
    </section>
  )
}
