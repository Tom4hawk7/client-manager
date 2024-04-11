import ClientForm from '../components/ClientForm'

export default function CreateClient() {
  const createClient = (input) => {
    window.database.submitClient(input)
  }

  return <ClientForm databaseOperation={createClient} />
}
