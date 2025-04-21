import styles from './Modal.module.css'
import { useRevalidator } from 'react-router'
import Button from '../button/Button'

export default function Confirm({ ref, toggle, onConfirm, children }) {
  let revalidator = useRevalidator()

  const confirm = () => {
    onConfirm()
    revalidator.revalidate()
    toggle()
  }

  return (
    <dialog ref={ref} className={`${styles.modal} ${styles.center}`}>
      <div className="button-container">{children}</div>

      <div className="button-container">
        {/* may need to add a toggle here */}
        <Button content="text" onClick={confirm}>
          Yes
        </Button>

        <Button content="text" onClick={toggle}>
          No
        </Button>
      </div>
    </dialog>
  )
}
