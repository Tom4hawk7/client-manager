import { useEffect, useState } from 'react'
import { Form, Fieldset, Input } from './Form'
import Button from '../button/Button'
import { Cross1Icon, TrashIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import Modal from '../modal/Modal'

export default function ClientForm({ data, submit, remove }) {
  let navigate = useNavigate()

  const text = data ? 'Edit' : 'Create'
  const disable = remove ? false : true

  function action(formData) {
    const formFields = Object.fromEntries(formData)
    submit(formFields)
    navigate(-1)
  }

  function del(id) {
    console.log('Delete id: ', id)
    remove(id)
    navigate(-2)
  }

  return (
    <Modal variant="right">
      <Form action={action} data={data}>
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
          <Button variant="blue" type="submit">
            {text}
          </Button>

          <Button disabled={disable} variant="red" size="42px" onClick={() => del(data.id)}>
            <TrashIcon width="20px" height="20px" />
          </Button>

          <Button size="42px" type="button" onClick={() => navigate(-1)}>
            <Cross1Icon width="20px" height="20px" />
          </Button>
        </div>
      </Form>
    </Modal>
  )
}
