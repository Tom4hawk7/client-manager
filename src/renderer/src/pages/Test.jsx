// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState, use } from 'react'

{
  /* <td>{client.name}</td>
            <td>{client.p_name}</td>
            <td>{client.address}</td>
            <td>{client.p_phone}</td>
            <td>{client.school}</td> */
}

// const columns = ['Name', 'Place', 'Dog', 'Mother']
// const data = [
//     {}
// ]

const testData = [
  {
    id: '1',
    name: 'Tom',
    p_name: 'Sue',
    address: 'Some Place',
    p_phone: '12894320',
    school: 'Grays Point'
  },
  {
    id: '2',
    name: 'Dave',
    p_name: 'Paul',
    address: 'Tazmania',
    p_phone: '90321802',
    school: 'Shireland'
  },
  {
    id: '3',
    name: 'Molly',
    p_name: 'Bear',
    address: 'Woods',
    p_phone: '231908432',
    school: 'Bumblebee'
  },
  { id: '4', name: 'Josh', p_name: 'Cam', address: 'Farm', p_phone: '780329803', school: 'Coogee' }
]

import useChecked from '../assets/hooks/useChecked'

export default function Test() {
  // const data = async () => window.client.getAll()
  const data = testData

  // const data = use(window.client.getAll())

  const check = useChecked(data)
  // const check = useChecked(testData)

  return (
    <>
      <div className="toolbar widget">
        <input className="searchbar" type="search" />
        <input className="dateinput" type="month" />
        <button className="button" onClick={() => console.log(check[0])}>
          Generate Invoice
        </button>
        <button className="button">Create Client</button>
      </div>
      <DataTable data={data} check={check}>
        <Column field="name" header="Name" />
        <Column field="p_name" header="Parent" />
        <Column field="address" header="Address" />
        <Column field="p_phone" header="Contact" />
        <Column field="school" header="School" />
      </DataTable>
    </>
  )
}
