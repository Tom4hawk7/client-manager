// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { Link, useLoaderData } from 'react-router'
import { GearIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import useChecked from '../assets/hooks/useChecked'
import currentDate from '../assets/functions/currentDate'
import Button from '../components/button/Button'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import Month from '../components/inputs/month/Month'
import filter from '../assets/functions/filter'
import useModal from '../assets/hooks/useModal'
import ClientForm from '../components/form/ClientForm'

const action = (id) => {
  return (
    <Link to={`/services/${id}`} state={id}>
      <Button variant="action" size="18px">
        <ClipboardIcon width="18px" height="18px" />
      </Button>
    </Link>
  )
}

export default function Clients() {
  const client = useLoaderData()
  const checked = useChecked(client)

  const [clients, setClients] = useState(client)
  const [date, setDate] = useState(currentDate) // might be able to use a ref here
  const [modalRef, toggle] = useModal()

  const submit = async (data) => {
    const res = await window.form.create(data)
    setClients([...clients, res])
  }

  function handleSearch(e) {
    setClients(filter(client, e.target.value, 'client_name'))
  }

  function handleInvoice() {
    console.log('Checked: ', checked.getAll())
    console.log('Date: ', date)
    console.log('Clients: ', clients)
  }

  return (
    <>
      <dialog className="modal right" ref={modalRef}>
        <ClientForm toggle={toggle} submit={submit} />
        {/* <ClientForm toggleModal={toggleModal} id={id} /> */}
      </dialog>

      <div className="toolbar widget">
        <Button variant="aqua" size="42px">
          <GearIcon width="20px" height="20px" />
        </Button>

        <SearchBar onChange={handleSearch} />
        <Month onChange={setDate} />

        <Button onClick={handleInvoice}>Generate Invoice</Button>
        <Button onClick={toggle}>Create Client </Button>
      </div>
      <div className="compartment">
        <DataTable data={clients} checked={checked} action={action}>
          <Column field="client_name" header="Name" />
          <Column field="parent_name" header="Parent" />
          <Column field="client_address" header="Address" />
          <Column field="parent_phone" header="Contact" />
          <Column field="client_school" header="School" />
        </DataTable>
      </div>
    </>
  )
}
