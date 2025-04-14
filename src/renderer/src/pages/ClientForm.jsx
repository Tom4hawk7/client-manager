import { useLoaderData, useLocation } from 'react-router'
import { Suspense } from 'react'
import { Input } from '../components/form/Form'

// import { FormInput } from '../components/form/Form'

// perhaps have an additional edit button and/or clear for each fieldset
// that way specific data can be edited

// need to figure out which inputs should be labelled as required
// deleting a client might need to be put in the edit client thingo

export default function ClientForm({ toggleModal, id }) {
  if (id) {
  }
  // function get() {
  //   try {
  //     initialData[]
  //   }
  // }

  function handleSubmit(formData) {
    console.log('initial data: ', initialData)

    toggleModal()
  }

  return (
    <Suspense fallback={<p>Loading..</p>}>
      <section>
        <form id="edit" action={handleSubmit}>
          <fieldset>
            <legend>Client Information</legend>
            <Input name="name" label="Name" />
            <Input name="dob" label="Date of birth" type="date" />
            <Input name="address" label="Address" />
            <Input name="school" label="School" />
            <Input name="p_number" label="Participation number" />
          </fieldset>

          <fieldset>
            <legend>Parent Information</legend>
            <Input name="parent_name" label="Name" />
            <Input name="parent_email" label="Email" />
            <Input name="parent_phone" label="Phone" type="tel" />
          </fieldset>

          <fieldset>
            <legend>Plan Information</legend>
            <Input name="plan_start_date" label="Start date" type="date" />
            <Input name="plan_end_date" label="End date" type="date" />
            <Input name="plan_end_date" label="Budget" type="number" />
          </fieldset>

          <fieldset>
            <legend>Plan Manager Information</legend>
            <Input name="plan_manager_name" label="Name" />
            <Input name="plan_manager_email" label="Email" />
          </fieldset>

          <div className="toolbar">
            <input className="button" type="submit" value="Edit" />
            <input className="button" type="button" value="Delete" />
            <button className="button" onClick={() => toggleModal()}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </Suspense>
  )
}
