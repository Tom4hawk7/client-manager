import { useState, useEffect } from 'react'
import EditButton from '../components/EditButton/EditButton'

export default function ClientForm({ initCheck, clickCheck, clickMasterCheck }) {
  const [rowData, setRowData] = useState([])
  const [checkValues, setCheckValues] = useState([])

  useEffect(() => {
    const data = async () => window.client.getTable()
    data()
      .then((res) => {
        setRowData(res)
        initCheckboxState(res)
      })
      .catch((err) => console.log(err))
  }, [])

  // checkbox functions

  function initCheckboxState(res) {
    const initCheckboxState = []
    for (let i = 0; i < res.length; i++) {
      initCheckboxState.push({ id: res[i].id, checked: false })
    }

    setCheckValues(initCheckboxState)
  }

  function handleCheckboxChange(client_id) {
    const updatedCheckValues = checkValues.map((row) => {
      if (row.id === client_id) {
        const newChecked = !row.checked // might be a bug here
        return { ...row, checked: newChecked }
      } else {
        return row
      }
    })

    setCheckValues(updatedCheckValues)
  }

  // impromptu solution
  function findCheckValue(client_id) {
    let result = {}
    for (let i = 0; i < checkValues.length; i++) {
      if (client_id === checkValues[i].id) {
        result = checkValues[i].checked
      }
    }

    return result
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" onClick={clickMasterCheck} />
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
                checked={findCheckValue(client.id)}
                onChange={() => handleCheckboxChange(client.id)}
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
