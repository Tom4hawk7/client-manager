import { useLoaderData, useLocation } from 'react-router'

// Look into what <label htmlFor=""/> is for
// figure out how you give a fieldset a title

// need to figure out which inputs should be labelled as required
// deleting a client might need to be put in the edit client thingo

export default function ClientForm({ toggleModal }) {
  return (
    <section>
      <form action="" method="dialog">
        {/* client */}
        <fieldset>
          <legend>Client Information</legend>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />

          <label htmlFor="dob">Date of birth</label>
          <input id="dob" type="date" />

          <label htmlFor="address">Address</label>
          <input id="address" type="text" />

          <label htmlFor="school">School</label>
          <input id="school" type="text" />

          {/* might have to leave this input disabled as it should be calculated on the fly */}
          <label htmlFor="p_number">Participation number</label>
          <input id="p_number" type="text" />
        </fieldset>

        {/* parent */}
        <fieldset>
          <legend>Parent Information</legend>

          <label htmlFor="parent_name">Name</label>
          <input id="parent_name" type="text" />

          <label htmlFor="parent_email">Email</label>
          <input id="parent_email" type="text" />

          <label htmlFor="parent_phone">Phone</label>
          <input id="parent_phone" type="text" />
        </fieldset>

        {/* plan */}
        <fieldset>
          <legend>Plan Information</legend>

          <label htmlFor="plan_start_date">Start date</label>
          <input id="plan_start_date" type="date" />

          <label htmlFor="plan_end_date">End date</label>
          <input id="plan_end_date" type="date" />

          <label htmlFor="plan_budget">Budget</label>
          <input id="plan_budget" type="text" />
        </fieldset>

        {/* plan manager */}
        <fieldset>
          <legend>Plan Manager Informatio</legend>

          <label htmlFor="plan_manager_name">Name</label>
          <input id="plan_manager_name" type="text" />

          <label htmlFor="plan_manager_email">Email</label>
          <input id="plan_manager_email" type="text" />
        </fieldset>

        <button className="button" onClick={toggleModal}>
          Cancel
        </button>
      </form>
    </section>
  )
}
