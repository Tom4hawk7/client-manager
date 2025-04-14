import { data, useLoaderData, useLocation } from 'react-router'
import { Link } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState } from 'react'
import currentDate from '../assets/functions/currentDate'
import useModal from '../assets/hooks/useModal'
import { useRef } from 'react'
import ClientForm from './ClientForm'

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
// need to open modal as a showModal()
// look into using electron dialogs

export default function Services() {
  const [services, setServices] = useState(useLoaderData())
  const [client] = useState(useLocation().state)

  // const [formData, setFormData] = useState({})
  const [modalRef, toggleModal] = useModal()

  // input event handlers
  async function handleMonthChange(e) {
    setServices(await window.service.getAll(client.id, e.target.value))
  }

  async function handleEditClient() {
    const plan = await window.plan.get(client.id)
    // setFormData(new Map(['client', client], ['plan', plan]))
    // const formState = { client: client, plan: plan }
    // setFormData({ client: client, plan: plan })

    toggleModal()
  }

  // async function handleEditClient() {
  //   const plan = await window.plan.get(client.id)
  //   setFormData({ client: client, plan: plan })

  //   toggleModal()
  // }

  return (
    <>
      <dialog className="modal right" ref={modalRef}>
        <ClientForm toggleModal={toggleModal} id={client.id} />
      </dialog>

      <div className="toolbar widget">
        <Link to="/">
          <button className="button">Clients</button>
        </Link>

        <button className="button">Add Service</button>

        <input
          className="dateinput"
          type="month"
          defaultValue={currentDate}
          onChange={handleMonthChange}
        />

        <button className="button" onClick={handleEditClient}>
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
    </>
  )
}
