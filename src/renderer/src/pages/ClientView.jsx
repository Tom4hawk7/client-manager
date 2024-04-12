import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'

export default function ClientView() {
  return (
    <>
      <Card className="small">
        <Link to="/client-create" className="icon">
          <BsPersonFillAdd />
        </Link>
      </Card>
    </>
  )
}
// className="icon"
