import { useLoaderData, useNavigate } from 'react-router'
import Button from '../components/button/Button'
import ButtonLink from '../components/button/ButtonLink'
import { Fieldset, Input } from '../components/form/Form'
import Modal from '../components/modal/Modal'
import { useState } from 'react'

export default function Settings() {
  let navigate = useNavigate()

  const id = useLoaderData().id
  const [invoice, setInvoice] = useState(id)

  const handleSubmit = () => {
    window.invoice.setId(invoice)
    navigate(-1)
  }

  return (
    <Modal variant="center">
      <section style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2>Settings</h2>
        </div>

        <Fieldset>
          <label style={{ marginBottom: '10px' }} htmlFor="invoice">
            Invoice number
          </label>
          <input
            id="invoice"
            style={{ color: 'var(--placeholder)', fontWeight: 400 }}
            type="number"
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            autoFocus
          />

          <div style={{ marginTop: '10px' }} className="button-container">
            <Button content="text" onClick={() => window.template.open()}>
              Open Template
            </Button>
          </div>
        </Fieldset>
        {/* <div style={{ marginBottom: '20px' }}>
        </div> */}

        <div className="button-container">
          <Button variant="blue" content="text" onClick={handleSubmit}>
            Save Changes
          </Button>
          <ButtonLink content="text" to="..">
            Cancel
          </ButtonLink>
        </div>
      </section>
    </Modal>
  )
}

export const settingsLoader = async () => {
  return await window.invoice.getId()
}

export const settingsAction = async ({ request }) => {
  console.log('Request', request)
  for (const [key, value] of request) {
    console.log(`${key}: ${value}`)
  }
}
