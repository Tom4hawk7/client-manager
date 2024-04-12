import { useEffect, useState } from 'react'
import '../assets/css/table.css'

export default function ClientTable() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const tableData = window.database.retrieveClients()
    tableData.then(setClients)
  }, [])

  return (
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
  )
}
