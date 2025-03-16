import styles from './Button.module.css'

export default function IconButton({ Icon, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {<Icon className={styles.icon} />}
    </button>
  )
}
