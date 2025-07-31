import { Form, Fieldset, Input } from './Form'
import { Cross1Icon } from '@radix-ui/react-icons'
import ButtonLink from '../button/ButtonLink'
import Button from '../button/Button'
import Modal from '../modal/Modal'

const defaultDate = new Date().toISOString().substring(0, 10)
const itemNumbers = new Set(['15_622_0128_1_3', '15_622_0118_1_3'])
// const serviceTypes = new Set(['session', 'travel'])

export default function ServiceForm({ data, text }) {
  const defaultItemNumber = itemNumbers.has(data.item_number)
    ? data.item_number
    : data.default_item_number

  // this will throw an error untill the loader has a property of type
  const defaultServiceType = data.service_type || 'session'

  return (
    <Modal variant="center">
      <Form data={data}>
        <Fieldset legend="Service Information">
          <label htmlFor="service_type">Service Type</label>
          <select name="service_type" id="service_type" defaultValue={defaultServiceType}>
            <option value="session">Session</option>
            <option value="travel">Travel</option>
          </select>

          <Input name="description" label="Description" required autoFocus />
          <Input type="date" name="date" label="Date" defaultValue={defaultDate} />

          <label htmlFor="item_number">Item Number</label>
          <select id="item_number" name="item_number" defaultValue={defaultItemNumber}>
            <option value="15_622_0128_1_3">15_622_0128_1_3</option> {/* older */}
            <option value="15_622_0118_1_3">15_622_0118_1_3</option> {/* younger */}
          </select>

          <Input type="number" min="0" name="minutes" label="Billable Minutes" />
        </Fieldset>
        <Input type="hidden" name="id" />
        <Input type="hidden" name="client_id" />

        <div className="button-container">
          <Button variant="blue" type="submit">
            {text}
          </Button>

          <ButtonLink content="icon" size="42px" to="..">
            <Cross1Icon width="20px" height="20px" />
          </ButtonLink>
        </div>
      </Form>
    </Modal>
  )
}
