// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { Outlet, useLoaderData } from 'react-router'
import { GearIcon, ClipboardIcon } from '@radix-ui/react-icons'
import useChecked from '../assets/hooks/useChecked'
import Button from '../components/button/Button'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import Month from '../components/inputs/month/Month'
import ButtonLink from '../components/button/ButtonLink'
import useFilter from '../assets/hooks/useFilter'
import useMonth from '../assets/hooks/useMonth'

export default function Clients() {
  const clients = useLoaderData()
  const checked = useChecked(clients)

  const [filter, setFilter] = useFilter()
  const [month, setMonth] = useMonth()

  function handleInvoice() {
    console.log('Checked: ', checked.getAll())
    console.log('Month: ', month)
    console.log('Clients: ', clients)
  }

  const handleSearch = (e) => setFilter('name', e.target.value)
  const handleMonth = (e) => setMonth(e.target.value)

  return (
    <>
      <Outlet />

      <div className="toolbar widget">
        <ButtonLink content="icon" variant="aqua" size="42px">
          <GearIcon width="20px" height="20px" />
        </ButtonLink>

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
          {/* <colgroup>
            <col style={{ width: '0px' }} />
            <col style={{ width: '0px' }} />
            <col style={{ width: '30px' }} />
            <col style={{ width: '90px' }} />
            <col style={{ width: '5%' }} />
          </colgroup> */}
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
    <ButtonLink content="icon" variant="action" size="18px" to={`/services/${id}`}>
      <ClipboardIcon width="18px" height="18px" />
    </ButtonLink>
  )
}
