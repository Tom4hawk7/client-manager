import { data, Outlet, useLoaderData, useLocation, useParams } from 'react-router'
import { Link } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useState } from 'react'
import useModal from '../assets/hooks/useModal'
import ClientForm from '../components/form/ClientForm'
import useFilter from '../assets/hooks/useFilter'
import Button from '../components/button/Button'
import { PersonIcon, Pencil2Icon } from '@radix-ui/react-icons'
import Month from '../components/inputs/month/Month'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import filter from '../assets/functions/filter'
import { useNavigate } from 'react-router'
import ButtonLink from '../components/button/ButtonLink'

// add a <Link/> here later
// const action = (id) => {
//   return (
//     <Button variant="action" size="18px">
//       <Pencil2Icon className="icon" width="18px" height="18px" />
//     </Button>
//   )
// }

const action = (id) => {
  return (
    <ButtonLink content="icon" variant="action" size="18px">
      <Pencil2Icon width="18px" height="18px" />
    </ButtonLink>
  )
}

export function serviceAction() {}

export default function Services() {
  const services = useLoaderData()
  const id = useParams().id

  const [filter, setFilter] = useFilter()

  const handleSearch = (e) => setFilter('description', e.target.value)
  const handleMonth = (e) => setFilter('month', e, target.value)

  // const [monthService, setMonthService] = useState(service)
  // const [services, setServices] = useState(service)
  // const [search, setSearch] = useState('')

  // function handleSearch(e) {
  //   const entry = e.target.value
  //   setSearch(entry)
  //   setServices(filter(monthService, entry, 'description'))
  // }

  // async function handleMonth(e) {
  //   const res = await window.service.readAll(id, e.target.value)
  //   setMonthService(res)
  //   setServices(filter(res, search, 'description'))
  // }

  return (
    <>
      <Outlet />

      <div className="toolbar widget">
        <ButtonLink content="icon" variant="aqua" size="42px" to="/">
          <PersonIcon width="20px" height="20px" />
        </ButtonLink>

        <SearchBar onChange={handleSearch} />
        <Month onChange={handleMonth} />

        <Button content="text">Add Service</Button>
        <ButtonLink content="text" to={`edit-client/${id}`}>
          Edit Client
        </ButtonLink>
        {/* <Link to={`edit-client/${id}`}>
          <Button>Edit Client</Button>
        </Link> */}
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
