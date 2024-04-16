import Table from '../../components/Table'
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
      <Table
        getOperation={getClients}
        removeOperation={removeOperation}
        formlink="/client-update"
      />
      <IconLink link="/client-create">
        <BsPersonFillAdd className="icon icon-svg" />
      </IconLink>
    </>
  )
}
