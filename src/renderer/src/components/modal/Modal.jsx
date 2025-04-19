import { useNavigate } from 'react-router'
import styles from './Modal.module.css'

export default function Modal({ variant, children }) {
  let navigate = useNavigate()
  const classStyle = styles[variant]

  const escape = (e) => {
    if (e.key == 'Escape') {
      navigate(-1)
    }
  }

  return (
    <section tabIndex="-1" onKeyDown={escape} className={styles.backdrop}>
      <div className={`${styles.modal} ${classStyle}`}>{children}</div>
    </section>
  )
}
