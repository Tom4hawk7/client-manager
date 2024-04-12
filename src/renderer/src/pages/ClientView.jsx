import Card from '../Components/Card'
import ClientTable from '../Components/ClientTable'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  return (
    <>
      <ClientTable />
      <Card className="small bottom-right">
        <Link to="/client-create" className="icon">
          <BsPersonFillAdd />
        </Link>
      </Card>
    </>
  )
}
