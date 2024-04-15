import { useEffect, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../assets/css/table.css'

export default function Table({ getOperation, removeOperation, formlink }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getOperation.then(setData)
  }, [])

  const handleDelete = (id, name) => {
    const deleteDialog = confirm(`Are you sure you want to delete ${name}`)

    if (deleteDialog) {
      removeOperation(id)
      setData(data.filter((item) => item.id !== id))
    }
  }

  if (data.length === 0) return
  return (
    <div className="hero">
      <table className="card">
        <thead>
          <tr>
            {Object.keys(data[0] || {})
              .filter((header) => header !== 'id')
              .map((header, key) => (
                <th key={key}>{header}</th>
              ))}
            <th key={'actions'}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="data-row" key={item.id}>
              {Object.values(item)
                .slice(1)
                .map((value, key) => (
                  <td key={key}>{value}</td>
                ))}
              <td key={'actions'}>
                <Edit formlink={formlink} id={item.id} />
                <Delete onClick={() => handleDelete(item.id, item.name)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Edit({ formlink, id }) {
  return (
    <Link to={formlink} state={{ id: id }}>
      <MdEdit className="icon table-icon" />
    </Link>
  )
}

function Delete({ onClick }) {
  return <MdDelete onClick={onClick} className="icon bin table-icon" />
}
