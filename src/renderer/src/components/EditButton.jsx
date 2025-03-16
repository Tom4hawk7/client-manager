import styles from './Button.module.css'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'

export default function EditButton(props) {
  return (
    <button className={styles.button} onClick={() => console.log(props.data)}>
      {<DotsHorizontalIcon className={styles.icon} />}
    </button>
  )
}
