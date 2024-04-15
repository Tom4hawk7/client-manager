import { Link, Outlet } from 'react-router-dom'

import { GoPersonFill } from 'react-icons/go'
import { RiServiceFill } from 'react-icons/ri'
import { AiFillFile } from 'react-icons/ai'

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
        <Link to="/plan" className="nav-item">
          <AiFillFile />
        </Link>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </div>
  )
}
