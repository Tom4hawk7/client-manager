import { data, Outlet, useLoaderData, useLocation, useParams } from 'react-router'
import { Link } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState } from 'react'
import useModal from '../assets/hooks/useModal'
import ClientForm from '../components/form/ClientForm'
import Button from '../components/button/Button'
import { PersonIcon, Pencil2Icon } from '@radix-ui/react-icons'
import Month from '../components/inputs/month/Month'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import filter from '../assets/functions/filter'
import { useNavigate } from 'react-router'

// add a <Link/> here later
const action = (id) => {
  return (
    <Button variant="action" size="18px">
      <Pencil2Icon className="icon" width="18px" height="18px" />
    </Button>
  )
}

export default function Services() {
  const service = useLoaderData()
  const id = useParams().id

  const [monthService, setMonthService] = useState(service)
  const [services, setServices] = useState(service)
  const [search, setSearch] = useState('')

  function handleSearch(e) {
    const entry = e.target.value
    setSearch(entry)
    setServices(filter(monthService, entry, 'description'))
  }

  async function handleMonth(e) {
    const res = await window.service.readAll(id, e.target.value)
    setMonthService(res)
    setServices(filter(res, search, 'description'))
  }

  return (
    <>
      <Outlet />

      <div className="toolbar widget">
        <Link to="/">
          <Button variant="aqua" size="42px" radius="5px">
            <PersonIcon width="20px" height="20px" />
          </Button>
        </Link>

        <SearchBar onChange={handleSearch} />

        <Month onChange={handleMonth} />
        <Button>Add Service</Button>
        <Link to={`edit-client/${id}`}>
          <Button>Edit Client</Button>
        </Link>
      </div>

      <div className="compartment">
        <DataTable data={services} action={action}>
          <Column field="description" header="Description" />
          <Column field="date" header="Date" />
          <Column field="unit_price" header="Unit Price" />
          <Column field="item_number" header="Item Number" />
        </DataTable>
      </div>
    </>
  )
}
