import { useLoaderData, useLocation } from 'react-router'
import { Link } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState } from 'react'
import currentDate from '../assets/functions/currentDate'

export default function Services() {
  const [services, setServices] = useState(useLoaderData())
  const client = useLocation().state

  async function handleMonthChange(e) {
    setServices(await window.service.getAll(client.id, e.target.value))
    // setServices(window.service.getAll(client.id, e.target.value))
  }

  return (
    <>
      <div className="toolbar widget">
        <Link to="/">
          <button className="button">Clients</button>
        </Link>
        <button className="button">Add Service </button>
        <input
          className="dateinput"
          type="month"
          defaultValue={currentDate}
          onChange={(e) => handleMonthChange(e)}
        />
        <button className="button">Edit Client</button>
        <button className="button">Delete Client</button>
      </div>
      <div className="compartment">
        <DataTable data={services}>
          <Column field="description" header="Description" />
          <Column field="date" header="Date" />
          <Column field="unit_price" header="Unit Price" />
          <Column field="item_number" header="Item Number" />
        </DataTable>
      </div>
    </>
  )
}
