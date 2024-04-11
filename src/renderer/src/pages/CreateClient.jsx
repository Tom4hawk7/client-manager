import ClientForm from '../components/ClientForm'

export default function CreateClient() {
  const createClient = (input) => {
    window.database.submitClient(input)
  }

  const clientData = {
    name: 'Thomas',
    dob: '2005-07-07',
    participant_number: '123456'
  }

  return <ClientForm databaseOperation={createClient} clientData={clientData} />
}
