import { useState, useEffect } from 'react'

export default function ClientTable({ selected, setSelected, services }) {
  const [rowData, setRowData] = useState([])

  console.log('services: ', services)

  useEffect(() => {
    const data = async () => window.client.getAll()
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

  function test() {
    for (const client of rowData) {
      return <p>{client.name}</p>
    }
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
            <td>{client.name}</td>
            <td>{client.p_name}</td>
            <td>{client.address}</td>
            <td>{client.p_phone}</td>
            <td>{client.school}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
