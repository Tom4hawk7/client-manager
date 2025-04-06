// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useLoaderData } from 'react-router'
import useChecked from '../assets/hooks/useChecked'
import { useState } from 'react'
import { PersonIcon } from '@radix-ui/react-icons'

// May need to add a breadcrumb to get back to the clients page
// Outlet component will be good for having the client edit section
// Look into ViewTransition aswell

const currentDate = new Date().toISOString().substring(0, 7)

export default function Test() {
  const [date, setDate] = useState(currentDate)

  // dataTable state
  const data = useLoaderData()
  const checked = useChecked(data)

  // console.log(data)

  function handleInvoice() {
    console.log('Checked: ', checked.getAll())
    console.log('Date: ', date)
  }

  return (
    <>
      <div className="toolbar widget">
        <input className="searchbar" type="search" />
        <input className="dateinput" type="month" onChange={(e) => setDate(e)} />
        <button className="button" onClick={handleInvoice}>
          Generate Invoice
        </button>
        <button className="button">Create Client</button>
      </div>
      <div className="compartment">
        <DataTable data={data} checked={checked} action={true}>
          <Column field="name" header="Name" />
          <Column field="p_name" header="Parent" />
          <Column field="address" header="Address" />
          <Column field="p_phone" header="Contact" />
          <Column field="school" header="School" />
        </DataTable>
      </div>
    </>
  )
}
