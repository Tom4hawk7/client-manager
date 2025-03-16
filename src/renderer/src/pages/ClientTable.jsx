import { useState, useEffect } from 'react'
import IconButton from '../components/IconButton'

export default function ClientTable({ selected, setSelected }) {
  const [rowData, setRowData] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    const data = async () => window.client.getTable()
    data()
      .then((res) => {
        setRowData(res)
        initSelected(res)
      })
      .catch((err) => console.log(err))
  }, [])

  // checkbox functions

  function initSelected(res) {
    const checkBoxes = []
    for (let i = 0; i < res.length; i++) {
      checkBoxes.push({ id: res[i].id, checked: false })
    }

    setSelected(checkBoxes)
  }

  function handleSelectionChange(client_id) {
    const updatedSelection = selected.map((row) => {
      if (row.id === client_id) {
        const newSelection = !row.checked // might be a bug here
        return { ...row, checked: newSelection }
      } else {
        return row
      }
    })

    setSelected(updatedSelection)
  }

  // impromptu solution
  function findSelection(client_id) {
    let result = {}
    for (let i = 0; i < selected.length; i++) {
      if (client_id === selected[i].id) {
        result = selected[i].checked
      }
    }

    return result
  }

  function handleMasterSelection(event) {
    const masterSelection = event.target.checked

    const updatedSelection = selected.map((row) => {
      return { ...row, checked: masterSelection }
    })

    setSelected(updatedSelection)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" onClick={handleMasterSelection} />
          </th>
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
            <td>
              <input
                className="checkbox"
                type="checkbox"
                name=""
                checked={findSelection(client.id)}
                onChange={() => handleSelectionChange(client.id)}
              />
            </td>
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
