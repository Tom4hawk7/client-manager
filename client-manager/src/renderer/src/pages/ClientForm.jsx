import { useState, useEffect } from 'react'
import EditButton from '../components/EditButton/EditButton'

export default function ClientForm() {
  const [rowData, setRowData] = useState({})

  useEffect(() => {
    const data = async () => window.client.getTable()
    data().then(setRowData)
  }, [])

  // const thingo = rowData.map((client) => client.client_name)
  // console.log(thingo)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Parent</th>
          <th>Address</th>
          <th>Contact</th>
          <th>School</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {/* {rowData.map((client) => console.log(client))} */}
        {rowData.map((client) => (
          <tr>
            <td>{client.client_name}</td>
            <td>{client.client_parent}</td>
            <td>{client.client_address}</td>
            <td>{client.parent_phone}</td>
            <td>{client.client_school}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
