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
  // console.log('Action: ', action)
  // console.log('New Action:', <newAction />)

  // should probably copy the action since mutating state outside a component can cause bugs and glitches
  // you could have it assume an id
  // console.log('Action.props: ', action.props)

  // could have if statements up here for defining constants
  // these constants would return an object containing two parts
  // these parts would either have stuff in them or not

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
              {/* I'm pretty sure I can use outlet here so to="" need to be defined higher up in the hierachy */}
              {action && (
                <td>
                  <Link to={`${action.to}/${data.id}`} state={data}>
                    {action.icon}
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

function CheckBox({ checked, onChange }) {
  return (
    <td>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </td>
  )
}
