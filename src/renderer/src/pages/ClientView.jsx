import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'
import '../assets/css/table.css'
import { useEffect, useState } from 'react'

export default function ClientView() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const tableData = window.database.retrieveClients()
    tableData.then(setClients)
  }, [])

  return (
    <>
      <Card className="small">
        <Link to="/client-create" className="icon">
          <BsPersonFillAdd />
        </Link>
      </Card>
      <table className="hero">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Participant number</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.client_id}>
              <td>{client.name}</td>
              <td>{client.dob}</td>
              <td>{client.participant_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
// className="icon"
