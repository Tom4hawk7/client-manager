import styles from './DataTable.module.css'
import { Link } from 'react-router'

// <td/> look into contentEditable property and an proppable event handler for it

// the action thingo should be able to change between a button or a link
// think about passing the prop as a function that returns as component

export function DataTable({ data, checked = '', action = '', children }) {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          {checked && <CheckBox onChange={(e) => checked.toggleAll(e)} />}
          {children}
          {action && <th key="action"></th>}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {data.length > 0 ? (
          data.map((data) => (
            <tr key={data.id}>
              {/* checkboxes */}
              {checked && (
                <CheckBox checked={checked.get(data.id)} onChange={() => checked.toggle(data.id)} />
              )}

              {/* column fields */}
              {children.map((column) => (
                <td key={column.props.field}>{data[column.props.field]}</td>
              ))}

              {/* action buttons */}
              {action && (
                <td className={styles.action}>
                  <Link to={`${action.to}/${data.id}`} state={data.id}>
                    {action.icon}
                  </Link>
                </td>
              )}
            </tr>
          ))
        ) : (
          // fallback data
          <tr>
            <td colSpan="15">There is no data to be displayed.</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export function Column({ field, header }) {
  return <th key={field}>{header}</th>
}

function CheckBox({ checked, onChange }) {
  return (
    <td>
      <input className={styles.checkbox} type="checkbox" checked={checked} onChange={onChange} />
    </td>
  )
}
