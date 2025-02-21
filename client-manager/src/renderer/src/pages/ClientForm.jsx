import { use, useState, useEffect } from 'react'
import EditButton from '../components/EditButton/EditButton'

export default function ClientForm({ initCheck, clickCheck, clickMasterCheck }) {
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    const data = async () => window.client.getTable()
    data()
      .then((res) => {
        setRowData(res)
        initCheck(res)
      })
      .catch((err) => console.log(err))
  }, [])

  // checkbox functionality
  // function initCheckboxes(res) {
  //   const tempCheckboxes = []

  //   for (let i = 0; i < res.length; i++) {
  //     tempCheckboxes.push({ id: res[i].id, ticked: false })
  //   }
  //   setChecked(tempCheckboxes)
  // }

  // function handleCheckboxClick(id) {
  //   const nextChecked = checked.map((row) => {
  //     if (row.id === id) {
  //       return {
  //         ...row,
  //         ticked: !row.ticked
  //       }
  //     } else {
  //       return row
  //     }
  //   })

  //   setChecked(nextChecked)
  // }

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
                onClick={() => clickCheck(client.id)}
                // onClick={() => handleCheckboxClick(client.id)}
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
