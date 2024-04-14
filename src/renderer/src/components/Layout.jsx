import { Link, Outlet } from 'react-router-dom'

import { GoPersonFill } from 'react-icons/go'
import { RiServiceFill } from 'react-icons/ri'
import '../assets/css/layout.css'

export default function Layout() {
  return (
    <div className="wrapper">
      <nav>
        <Link to="/" className="nav-item">
          <RiServiceFill />
        </Link>
        <Link to="/client" className="nav-item">
          <GoPersonFill />
        </Link>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </div>
  )
}
