import { Fieldset, Form, Input } from '../components/Form'

// define create and update functions later

export default function PlanForm() {
  return (
    <>
      <Form>
        <Fieldset legend="Plan">
          <Input label="Start" name="start_date" type="date" />
          <Input label="End" name="end_date" type="date" />
          <Input label="Budget" name="budget" type="number" />
        </Fieldset>
        <Fieldset legend="Plan Manager">
          <Input label="Name" name="plan_manager_name" />
          <Input label="Email" name="plan_manager_email" />
        </Fieldset>
      </Form>
    </>
  )
}
