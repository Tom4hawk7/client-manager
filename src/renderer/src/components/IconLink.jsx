import { Link } from 'react-router-dom'

export default function IconLink({ link, children }) {
  return (
    <div className="card bottom-right small">
      <Link to={link}>{children}</Link>
    </div>
  )
}
