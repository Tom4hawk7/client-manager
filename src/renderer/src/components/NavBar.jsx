import { Link } from 'react-router-dom'

import { GoPersonFill } from 'react-icons/go'
import { RiServiceFill } from 'react-icons/ri'

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="icon nav">
        <RiServiceFill />
      </Link>
      <Link to="/client" className="icon nav">
        <GoPersonFill />
      </Link>
    </nav>
  )
}
