import { useState } from 'react'
import styles from './DataTable.module.css'

// todo
// Add checkbox selectable component - conditionally rendered
// Add cell editing - Perhaps -> may not really be necessary

{
  /* <DataTable value={products} selectionMode={rowClick ? null : 'radiobutton'} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
    <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable> */
}

// perhaps add an handleChecked event handler

// function handleChange would be replaced by setChecked hook

export function DataTable({ data, check, children }) {
  const [checked, setChecked] = check

  // need to make checkbox thingo dependent on if check is a value
  // going to add checkboxes by default but later use conditional rendering

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {/* Make top part conditionally rendered later */}
          <td>
            <input type="checkbox" defaultChecked={false} />
          </td>

          {children}
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.id}>
            {/* Make top part conditionally rendered later */}
            <td key={data.id}>
              <input
                type="checkbox"
                checked={checked.get(data.id)}
                onChange={() => setChecked(data.id)}
              />
            </td>

            {children.map((column) => (
              <td key={column.props.field}>{data[column.props.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Need to add something like this
{
  /* <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column> */
}

export function Column({ field, header }) {
  return <th key={field}>{header}</th>
}

// state initialisation methods

// function createChecked(data) {
//   const checked = new Map()

//   data.map((data) => checked.set(data.id, false))
//   return checked
// }
