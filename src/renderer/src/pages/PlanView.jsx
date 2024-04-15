import IconLink from '../components/IconLink'
import { AiFillFileAdd } from 'react-icons/ai'

export default function PlanView() {
  return (
    <>
      <header>
        <h1>Plans</h1>
      </header>
      <IconLink link="/plan-form">
        <AiFillFileAdd className="icon icon-svg" />
      </IconLink>
    </>
  )
}
