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

    // FormData not a supported type to send over

    window.form.update(formFields)
    setData(formFields)

    // const output = {}
    // if (id) output.id = id

    // I reckon you could do the Object.fromEntries better -> make the keys the keys of said classes
    // however, this code should probably be adapted for the FormManager
    // for (const [key, value] of formData) {
    //   const [className, propName] = key.split(/_(.*)/, 2)
    //   test[className] = { ...test[className], [propName]: value }
    // }
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

      <div className="toolbar">
        <button className="btn" type="submit">
          Edit
        </button>

        <button className="btn" type="button" onClick={toggleModal}>
          Cancel
        </button>
      </div>
    </Form>
  )
}
