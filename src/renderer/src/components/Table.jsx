import { useEffect, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link, redirect, useNavigate } from 'react-router-dom'
import '../assets/css/table.css'

// Maybe using useContext() would be better here
export default function Table({ operation, formlink }) {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    operation.then(setData)
  }, [])

  const handleRowSelect = (itemid) => {
    navigate(formlink, { state: { id: itemid } })
  }

  if (data.length === 0) return
  return (
    <table className="hero">
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((item, key) => (
            <th key={key}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleRowSelect(item.id)}>
            {Object.values(item).map((value, key) => (
              <td key={key}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
