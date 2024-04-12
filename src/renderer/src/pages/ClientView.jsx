import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'
import '../assets/css/table.css'
import { useEffect, useState } from 'react'

export default function ClientView() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const tableData = window.database.retrieveClients()
    tableData.then(setClients)
  }, [])

  // console.log(clients)
  console.log(clients)

  return (
    <>
      <Card className="small">
        <Link to="/client-create" className="icon">
          <BsPersonFillAdd />
        </Link>
      </Card>
      <div className="card">
        {clients.map((value, key) => (
          <li key={key}>{value.name}</li>
        ))}
      </div>

      {/* <div className="card">
        {clients.map((value) => (
          <div>{value}</div>
        ))}
      </div> */}
      <table className="hero">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Participant number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thomas Mcgrath</td>
            <td>2005-07-07</td>
            <td>123456789</td>
          </tr>
          <tr>
            <td>Another one</td>
            <td>Another one</td>
            <td>Another one</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
// className="icon"
