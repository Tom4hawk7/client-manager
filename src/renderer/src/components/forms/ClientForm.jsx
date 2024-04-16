import { Form, Fieldset, Input } from './Form'

// export const form =
//   'SELECT Client.client_id AS id, ' +
//   'Client.name AS client_name, ' +
//   'Client.dob, ' +
//   'Client.school, ' +
//   'Client.address, ' +
//   'Client.participant_number, ' +
//   'Parent.name AS parent_name, ' +
//   'Parent.email AS parent_email, ' +
//   'Parent.phone ' +
//   'FROM Client ' +
//   'JOIN Parent ' +
//   'ON Client.client_id = Parent.client_id ' +
//   'WHERE Client.client_id = ?'

// define create and update functions
// const create = (client) => {
//   window.client.create(client)
// }

// const update = (client) => {
//   window.client.update(client)
// }

// inside the form
// const [clientData, setClientData] = useState('')
// const { id } = useLocation().state || ''

// useEffect(() => {
//   if (id) window.client.get(id).then(setClientData)
// }, [])
export default function ClientForm({ clientData = '' }) {
  return (
    <Form>
      <Fieldset legend="Client">
        <Input label="Name" name="client_name" defaultValue={clientData.client_name} />
        <Input label="Date of birth" name="dob" type="date" defaultValue={clientData.dob} />
        <Input label="School" name="school" defaultValue={clientData.school} />
        <Input label="Address" name="address" defaultValue={clientData.address} />
        <Input
          label="Participant Number"
          name="participant_number"
          defaultValue={clientData.participant_number}
        />
      </Fieldset>
      <Fieldset legend="Parent">
        <Input label="Name" name="parent_name" defaultValue={clientData.parent_name} />
        <Input label="Email" name="parent_email" defaultValue={clientData.parent_email} />
        <Input
          label="Phone number"
          name="parent_phone"
          type="tel"
          defaultValue={clientData.parent_phone}
        />
      </Fieldset>
    </Form>
  )
}
