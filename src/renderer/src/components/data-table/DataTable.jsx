import { Link1Icon, Link2Icon, PersonIcon } from '@radix-ui/react-icons'
import styles from './DataTable.module.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router'

// you can send state as data and then just not retrieve it
// you would need to be able to specify to to={} before
// the state would identified after
// look into contentEditable in the td property
// probably should have it save the data on refresh
// would have to look into saving front side data in electron-store or something

/*
<Link to={'link'}>
  <Icon>
</Link>

perhaps just have className for an Icon or something
*/

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
        {data ? (
          data.map((data) => (
            <tr key={data.id}>
              {checked && (
                <CheckBox checked={checked.get(data.id)} onChange={() => checked.toggle(data.id)} />
              )}

              {children.map((column) => (
                <td key={column.props.field}>{data[column.props.field]}</td>
              ))}

              {/* {action && } */}
              {action && (
                <td>
                  <Link to={'/services/1'} state={data}>
                    <PersonIcon />
                  </Link>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">There is no data to be displayed.</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

// function TableBody() {
//   if
// }

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
