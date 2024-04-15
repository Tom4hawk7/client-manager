import { IoAddCircle } from 'react-icons/io5'
import IconLink from '../components/IconLink'
// import { IconLink } from '../components/IconLink'

export default function ServiceView() {
  return (
    <>
      <header>
        <h1>Services</h1>
      </header>
      <IconLink link="/service-form">
        <IoAddCircle className="icon icon-svg" />
      </IconLink>
    </>
  )
}
