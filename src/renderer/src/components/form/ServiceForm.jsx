import { Form, Fieldset, Input } from './Form'
import { TrashIcon, Cross1Icon } from '@radix-ui/react-icons'
import ButtonLink from '../button/ButtonLink'
import Button from '../button/Button'
import Modal from '../modal/Modal'

const date = new Date().toISOString().substring(0, 10)
const itemNumber = new Set(['15_622_0128_1_3', '15_005_0118_1_3'])

export default function ServiceForm({ data, text, disable }) {
  const defaultValue = itemNumber.has(data.item_number) ? data.item_number : ''

  return (
    <Modal variant="center">
      <Form data={data}>
        <Fieldset legend="Service Information">
          <Input name="description" label="Description" required autoFocus />
          <Input type="date" name="date" label="Date" defaultValue={date} />

          <label htmlFor="item_number">Item Number</label>
          <select id="item_number" defaultValue={defaultValue} name="item_number">
            <option value="15_622_0128_1_3">15_622_0128_1_3</option> {/* older */}
            <option value="15_005_0118_1_3">15_005_0118_1_3</option> {/* younger */}
          </select>

          <Input type="number" step="any" min="0" name="unit_price" label="Price" />
        </Fieldset>
        <Input type="hidden" name="id" />
        <Input type="hidden" name="client_id" />

        <div className="button-container">
          <Button variant="blue" type="submit" name="intent" value="edit">
            {text}
          </Button>

          <Button
            type="submit"
            name="intent"
            value="delete"
            disabled={disable}
            variant="red"
            size="42px"
          >
            <TrashIcon width="20px" height="20px" />
          </Button>
          <ButtonLink content="icon" size="42px" to="..">
            <Cross1Icon width="20px" height="20px" />
          </ButtonLink>
        </div>
      </Form>
    </Modal>
  )
}
