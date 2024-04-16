import ClientTable from '../../components/tables/ClientTable'
import IconLink from '../../components/IconLink'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  const getClients = window.client.getAll()

  const removeOperation = (id) => {
    window.client.remove(id)
  }

  return (
    <>
      <header>
        <h1>Clients</h1>
      </header>
      <ClientTable />
      <IconLink link="/client-create">
        <BsPersonFillAdd className="icon icon-svg" />
      </IconLink>
    </>
  )
}
