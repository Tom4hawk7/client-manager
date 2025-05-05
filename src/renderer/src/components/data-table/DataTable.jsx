import styles from './DataTable.module.css'
import { Link } from 'react-router'

// look into having the css style for a table only calculat the default or whatever it's called

export function DataTable({ data, checked = '', action = '', children }) {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              {checked && <CheckBox onChange={(e) => checked.toggleAll(e)} />}
              {children}
              {action && <th width={'50px'} key="action"></th>}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {Array.isArray(data) === true && data.length > 0 ? (
              data.map((data) => (
                <tr key={data.id}>
                  {/* checkboxes */}
                  {checked && (
                    <CheckBox
                      checked={checked.get(data.id)}
                      onChange={() => checked.toggle(data.id)}
                    />
                  )}

                  {/* column fields */}
                  {children.map((column) => (
                    <td key={column.props.field}>{data[column.props.field]}</td>
                  ))}

                  {/* action buttons */}
                  {/* {console.log('name_test: ', data.client)} */}
                  {action && <td className={styles.action}>{action(data.id, data.client_name)}</td>}
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
      </div>
    </div>
  )
}

export function Column({ field, header, width }) {
  return (
    <th key={field} style={{ width: width }}>
      {header}
    </th>
  )
}

function CheckBox({ checked, onChange }) {
  return (
    <td width="50px">
      <input className={styles.checkbox} type="checkbox" checked={checked} onChange={onChange} />
    </td>
  )
}
