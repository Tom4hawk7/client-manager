import Table from '../components/Table'
import IconLink from '../components/IconLink'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  const getClients = window.databaseClient.getClients()

  const removeOperation = (id) => {
    window.databaseClient.removeClient(id)
  }

  return (
    <>
      <header>
        <h1>Clients</h1>
      </header>
      <Table getOperation={getClients} removeOperation={removeOperation} formlink="/client-form" />
      <IconLink link="/client-form">
        <BsPersonFillAdd className="icon icon-svg" />
      </IconLink>
    </>
  )
}
