import Table from '../components/Table'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'
import IconLink from '../components/IconLink'

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
