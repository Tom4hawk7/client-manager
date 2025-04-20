import { Form, Fieldset, Input } from './Form'
import Modal from '../modal/Modal'

export default function TestClientForm({ data, children }) {
  return (
    <Modal variant="right">
      <Form data={data}>
        <Input type="hidden" name="id" />

        <Fieldset legend="Client Information">
          <Input name="client_name" label="Name" required={true} autoFocus={true} />
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

        <div style={{ height: '42px' }} className="button-container">
          {children}
        </div>
      </Form>
    </Modal>
  )
}
