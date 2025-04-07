import { useLoaderData, useLocation } from 'react-router'
import { Link } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState } from 'react'
import currentDate from '../assets/functions/currentDate'
import useModal from '../assets/hooks/useModal'

// look into the prime react sidebar
// look into the prime react overlay components
// could even have expandable and collapsible fieldsets

// how did you think about the DIALOG element before, duh
// can use ::backdrop aswell
// instead of having a loader for a route you can just have an event handler for clicking on the modal to retrieve data
// look into returnvalue of dialog element perhaps

// The bug happens after the dialog is opened
// it was probably becuase you had it wrapped around a link and state dies after a component is destoryed
// but because you hadn't changed to a new page the component and its state died but was still visible
//

export default function Services() {
  const [open, toggleOpen] = useModal()
  const [services, setServices] = useState(useLoaderData())
  const client = useLocation().state

  async function handleMonthChange(e) {
    const services = await window.service.getAll(client.id, e.target.value)
    setServices(services)
  }

  return (
    <>
      {/* <div className="popup panel">
        <Outlet />
      </div> */}

      <dialog open={open}>
        <p>This is a dialog</p>
      </dialog>

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
        <button className="button" onClick={toggleOpen}>
          Edit Client
        </button>
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
      {/* <div>
        <Outlet />
      </div> */}
      {/* <div className="popup panel">
        <Outlet />
      </div> */}
    </>
  )
}
