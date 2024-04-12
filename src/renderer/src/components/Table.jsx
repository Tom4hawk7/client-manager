import { useEffect, useState } from 'react'
import '../assets/css/table.css'

export default function Table({ operation }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    operation.then(setData)
    setLoading(false)
  }, [])

  if (loading) return <p>Loading</p>
  if (data === 0) return <p>No clients</p>
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
          <tr key={item.id}>
            {Object.values(item).map((value, key) => (
              <td key={key}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
