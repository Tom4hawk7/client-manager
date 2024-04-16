import { Table, THead, Header, TBody, DataRow, DataCell, TableActions } from './Table'
import { useEffect, useState } from 'react'
import '../../assets/css/form.css'
import { useLocation } from 'react-router-dom'

export default function ClientTable() {
  const [data, setData] = useState([])
  // const { id } = useLocation().state || ''

  useEffect(() => {
    window.client.getAll().then(setData)
  })

  const handleDelete = (id, name) => {
    const deleteDialog = confirm(`Are you sure you want to delete ${name}`)

    if (deleteDialog) {
      window.client.remove(id)
      setData(data.filter((item) => item.id !== id))
    }
  }

  if (data.length === 0) return
  return (
    <Table>
      <THead>
        {/* see if you can make {children} into key a heading */}
        <Header header="name" />
        <Header header="parent" />
        <Header header="address" />
        <Header header="contact" />
        <Header header="school" />
        <Header header="actions" />
      </THead>
      <TBody>
        {data.map((client) => (
          <DataRow key={client.id}>
            <DataCell value={client.name} />
            <DataCell value={client.parent} />
            <DataCell value={client.address} />
            <DataCell value={client.contact} />
            <DataCell value={client.school} />
            {/* remember to change clientData to the actual clientData once you've got it working */}
            <TableActions
              editLink="/client-edit"
              clientData={client.id}
              handleDelete={() => handleDelete(client.id, client.name)}
            />
          </DataRow>
        ))}
      </TBody>
    </Table>
  )
}
