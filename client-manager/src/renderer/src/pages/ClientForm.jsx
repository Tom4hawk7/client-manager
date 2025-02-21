import { use, useState, useEffect } from 'react'
import EditButton from '../components/EditButton/EditButton'

export default function ClientForm() {
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    const data = async () => window.client.getTable()
    data()
      .then(setRowData)
      .catch((err) => console.log(err))
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Parent</th>
          <th>Address</th>
          <th>Contact</th>
          <th>School</th>
        </tr>
      </thead>
      <tbody>
        {/* {rowData.map((client) => console.log(client))} */}
        {rowData.map((client) => (
          <tr key={client.id}>
            <td>{client.client_name}</td>
            <td>{client.parent_name}</td>
            <td>{client.client_address}</td>
            <td>{client.parent_phone}</td>
            <td>{client.client_school}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
