import { useLoaderData, redirect } from 'react-router'
import Button from '../components/button/Button'
import ButtonLink from '../components/button/ButtonLink'
import { Form, Fieldset, Input } from '../components/form/Form'
import Modal from '../components/modal/Modal'

export default function Settings() {
  const data = useLoaderData()

  return (
    <Modal variant="center">
      <Form data={data}>
        <div style={{ marginBottom: '20px' }}>
          <h2>Settings</h2>
        </div>

        <Fieldset>
          <Input type="number" name="invoice_id" label="Invoice" min="0" />
          <Input type="number" name="session_rate" label="Session Rate" min="0" step="any" />
          <Input type="number" name="travel_rate" label="Travel Rate" min="0" step="any" />

          <div style={{ marginTop: '20px' }} className="button-container">
            <Button content="text" onClick={window.settings.openTemplate}>
              Open Template
            </Button>
          </div>
        </Fieldset>

        <div className="button-container">
          <Button variant="blue" content="text" type="submit">
            Save Changes
          </Button>
          <ButtonLink content="text" to="..">
            Cancel
          </ButtonLink>
        </div>
      </Form>
    </Modal>
  )
}

export const settingsLoader = async () => {
  return await window.settings.getAll()
}

export const settingsAction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData())
  window.settings.setAll(formData)
  return redirect('..')
}
