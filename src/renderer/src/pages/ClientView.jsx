import Table from '../components/Table'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  const getClients = window.database.getClients()

  const removeOperation = (id) => {
    window.database.removeClient(id)
  }

  return (
    <>
      <Table getOperation={getClients} removeOperation={removeOperation} formlink="/client-form" />
      <div className="card bottom-right small">
        <Link to="/client-form">
          <BsPersonFillAdd className=" icon icon-svg" />
        </Link>
      </div>
    </>
  )
}
