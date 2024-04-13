import Table from '../components/Table'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  const getClients = window.database.retrieveClients()

  return (
    <>
      <Table operation={getClients} />
      <Link className="card bottom-right icon" to="/client-create">
        <BsPersonFillAdd />
      </Link>
    </>
  )
}
