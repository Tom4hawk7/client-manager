import { Link } from 'react-router-dom'
import person from '../assets/svg/person.svg'
import receipt from '../assets/svg/receipt.svg'

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="icon">
        <img src={person} width="36px" height="36px" />
      </Link>
      <Link to="/invoices" className="icon">
        <img src={receipt} width="36px" height="36px" />
      </Link>
    </nav>
  )
}
