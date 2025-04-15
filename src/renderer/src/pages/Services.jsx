import { data, useLoaderData, useLocation } from 'react-router'
import { Link } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState } from 'react'
import currentDate from '../assets/functions/currentDate'
import useModal from '../assets/hooks/useModal'
import { useRef } from 'react'
import ClientForm from './ClientForm'

export default function Services() {
  const [services, setServices] = useState(useLoaderData())
  const [id] = useState(useLocation().state)

  const [modalRef, toggleModal] = useModal()

  // input event handlers
  async function handleMonthChange(e) {
    setServices(await window.service.read(id, e.target.value))
  }

  return (
    <>
      <dialog className="modal right" ref={modalRef}>
        <ClientForm toggleModal={toggleModal} id={id} />
      </dialog>

      <div className="toolbar widget">
        <Link to="/">
          <button className="btn">Clients</button>
        </Link>

        <button className="btn">Add Service</button>

        <input
          className="dateinput"
          type="month"
          defaultValue={currentDate}
          onChange={handleMonthChange}
        />

        <button className="btn" onClick={toggleModal}>
          Edit Client
        </button>

        <button className="btn">Delete Client</button>
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
