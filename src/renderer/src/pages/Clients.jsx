// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { Link, Outlet, useLoaderData, useSearchParams } from 'react-router'
import { GearIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import useChecked from '../assets/hooks/useChecked'
import currentDate from '../assets/functions/currentDate'
import Button from '../components/button/Button'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import Month from '../components/inputs/month/Month'
import filter from '../assets/functions/filter'
import ButtonLink from '../components/button/ButtonLink'
import useFilter from '../assets/hooks/useFilter'
// the problem is the <Outlet/>
// thats why it won't refresh

// you need to add an action and then set the state of it being equal to that perhaps

const action = (id) => {
  return (
    <ButtonLink content="icon" variant="action" size="18px" to={`/services/${id}`}>
      <ClipboardIcon width="18px" height="18px" />
    </ButtonLink>
  )
}

export default function Clients() {
  const data = useLoaderData()
  const checked = useChecked(data)

  const [filter, setFilter] = useFilter()
  const [date, setDate] = useState(currentDate) // might be able to use a ref here

  function handleInvoice() {
    console.log('Checked: ', checked.getAll())
    console.log('Date: ', date)
    console.log('Clients: ', data)
  }

  const handleSearch = (e) => setFilter('name', e.target.value)

  return (
    <>
      <Outlet />

      <div className="toolbar widget">
        <ButtonLink content="icon" variant="aqua" size="42px">
          <GearIcon width="20px" height="20px" />
        </ButtonLink>

        <SearchBar onChange={handleSearch} />
        <Month onChange={setDate} />

        <Button content="text" onClick={handleInvoice}>
          Generate Invoice
        </Button>

        <ButtonLink content="text" to="create-client">
          Create Client
        </ButtonLink>
      </div>

      <div className="compartment">
        <DataTable data={data} checked={checked} action={action}>
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
