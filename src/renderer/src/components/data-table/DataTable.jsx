import styles from './DataTable.module.css'

export function DataTable({ data, checked = '', children }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {checked && <CheckBox onChange={(e) => checked.toggleAll(e)} />}
          {children}
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.id}>
            {checked && (
              <CheckBox checked={checked.get(data.id)} onChange={() => checked.toggle(data.id)} />
            )}

            {children.map((column) => (
              <td key={column.props.field}>{data[column.props.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function Column({ field, header }) {
  return <th key={field}>{header}</th>
}

export function CheckBox({ checked, onChange }) {
  return (
    <td>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </td>
  )
}
