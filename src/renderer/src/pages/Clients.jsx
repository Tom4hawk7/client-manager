// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { Outlet, useLoaderData, useRevalidator } from 'react-router'
import { GearIcon, ClipboardIcon, TrashIcon } from '@radix-ui/react-icons'
import useChecked from '../assets/hooks/useChecked'
import Button from '../components/button/Button'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import Month from '../components/inputs/month/Month'
import ButtonLink from '../components/button/ButtonLink'
import useFilter from '../assets/hooks/useFilter'
import useMonth from '../assets/hooks/useMonth'
import { useEffect, useRef } from 'react'
// import Dialog from '../components/modal/Dialog'
import Confirm from '../components/modal/Confirm'
import useModal from '../assets/hooks/useModal'
import { Form } from 'react-router'

export default function Clients() {
  const clients = useLoaderData()
  const checked = useChecked(clients)

  const [filter, setFilter] = useFilter()
  const [month, setMonth] = useMonth()

  const [ref, toggle] = useModal()

  function handleInvoice() {
    const checkedBoxes = checked.getPositive()

    if (checkedBoxes.length > 0) {
      window.invoice.generate(checked.getPositive(), month)
    } else {
      return
    }
    // const date = new Date().toLocaleDateString()
    // console.log('Date: ', date)
    // console.log('Checked: ', checked.getAll())
    // console.log('Month: ', month)
    // console.log('Clients: ', clients)

    // will need to send checked.getAll
    // will need to send month
  }

  const handleSearch = (e) => setFilter('name', e.target.value)
  const handleMonth = (e) => setMonth(e.target.value)
  const handleDelete = () => checked.forAll(window.form.delete)

  return (
    <>
      <Outlet />

      <Confirm ref={ref} toggle={toggle} onConfirm={handleDelete}>
        <p>Are you sure you want to delete these clients</p>
      </Confirm>

      <div className="toolbar widget">
        <ButtonLink content="icon" variant="blue" size="40px">
          <GearIcon width="20px" height="20px" />
        </ButtonLink>

        <Button
          disabled={!checked.check()}
          onClick={toggle}
          content="icon"
          size="40px"
          variant="red"
        >
          <TrashIcon width="20px" height="20px" />
        </Button>

        {/* <Button disabled={true} content="icon"></Button> */}

        <SearchBar onChange={handleSearch} />
        <Month onChange={handleMonth} />

        <Button content="text" onClick={handleInvoice}>
          Generate Invoice
        </Button>

        <ButtonLink content="text" to="create-client">
          Create Client
        </ButtonLink>
      </div>

      <div className="compartment">
        <DataTable data={clients} checked={checked} action={action}>
          <Column field="client_name" header="Name" width="20%" />
          <Column field="parent_name" header="Parent" width="20%" />
          <Column field="client_address" header="Address" width="20%" />
          <Column field="parent_phone" header="Contact" width="20%" />
          <Column field="client_school" header="School" width="20%" />
        </DataTable>
      </div>
    </>
  )
}

export const clientsLoader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams
  const searchName = searchParams.get('name') || ''

  return await window.table.read(searchName)
}

const action = (id) => {
  return (
    <ButtonLink content="icon" variant="action" size="20px" to={`/services/${id}`}>
      <ClipboardIcon width="16px" height="16px" />
    </ButtonLink>
  )
}
