import styles from './DataTable.module.css'

{
  /* <DataTable value={products} selectionMode={rowClick ? null : 'radiobutton'} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
    <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable> */
}
{
  /* <tr>
          {columns.map((heading) => (
            <td>{heading}</td>
          ))} */
}

export function DataTable({ data, children }) {
  //   children.map((child) => console.log(child))
  //   children.map((child) => console.log(child.props))
  //   children.map((child) => console.log(child.props.header))
  //   console.log(children)

  //   columns.map((data) => console.log(data))
  {
    /* {children.map((column) => (
    <td>{column.props.header}</td>
  ))} */
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>{children}</tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr key={data.id}>
            {console.log(data.id)}
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
  return <th>{header}</th>
}
