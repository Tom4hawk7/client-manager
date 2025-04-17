import currentDate from '../../../assets/functions/currentDate'
import styles from './Month.module.css'

export default function Month({ onChange }) {
  return (
    <input
      className={styles.monthinput}
      type="month"
      defaultValue={currentDate}
      onChange={onChange}
    />
  )
}

{
  /* <input
          className="dateinput"
          type="month"
          defaultValue={currentDate}
          onChange={(e) => setDate(e)}
        /> */
}
