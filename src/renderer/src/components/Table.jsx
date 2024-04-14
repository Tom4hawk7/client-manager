import { useEffect, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../assets/css/table.css'

// Maybe using useContext() would be better here
export default function Table({ operation, formlink }) {
  const [data, setData] = useState([])

  useEffect(() => {
    operation.then(setData)
  }, [])

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
          <tr className="data-row" key={item.id}>
            {Object.values(item).map((value, key) => (
              <td key={key}>{value}</td>
            ))}
            <td key={'actions'}>
              <Edit formlink={formlink} id={item.id} />
              <Delete />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Edit({ formlink, id }) {
  return (
    <Link to={formlink} state={{ id: id }}>
      <MdEdit className="icon table-icon" />
    </Link>
  )
}

// TODO implement functionality
function Delete() {
  return <MdDelete className="icon bin table-icon" />
}
