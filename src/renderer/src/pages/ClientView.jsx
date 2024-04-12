import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'
import '../assets/css/table.css'

export default function ClientView() {
  return (
    <>
      <Card className="small">
        <Link to="/client-create" className="icon">
          <BsPersonFillAdd />
        </Link>
      </Card>
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
