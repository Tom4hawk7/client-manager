import Card from '../Components/Card'
import Table from '../Components/Table'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  return (
    <>
      <Table />
      <Card className="small bottom-right">
        <Link to="/client-create" className="icon">
          <BsPersonFillAdd />
        </Link>
      </Card>
    </>
  )
}
