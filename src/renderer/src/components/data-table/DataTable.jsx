import styles from './DataTable.module.css'

export function DataTable({ data, checked = '', action = '', children }) {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          {checked && <CheckBox onChange={(e) => checked.toggleAll(e)} />}
          {children}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {data.map((data) => (
          <tr key={data.id}>
            {checked && (
              <CheckBox checked={checked.get(data.id)} onChange={() => checked.toggle(data.id)} />
            )}

            {children.map((column) => (
              <td key={column.props.field}>{data[column.props.field]}</td>
            ))}

            {/* {action && } */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function Column({ field, header }) {
  return <th key={field}>{header}</th>
}

export function Action() {
  return <td></td>
}

function CheckBox({ checked, onChange }) {
  return (
    <td>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </td>
  )
}
