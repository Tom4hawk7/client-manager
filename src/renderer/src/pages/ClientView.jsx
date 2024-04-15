import Table from '../components/Table'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  const getClients = window.database.getClients()

  return (
    <>
      <Table operation={getClients} formlink="/client-form" />
      <div className="card bottom-right small">
        <Link to="/client-form">
          <BsPersonFillAdd className=" icon icon-svg" />
        </Link>
      </div>
    </>
  )
}
