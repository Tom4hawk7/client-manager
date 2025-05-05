import { Outlet, useLoaderData, useLocation, useParams } from 'react-router'
import { DataTable, Column } from '../components/data-table/DataTable'
import useFilter from '../assets/hooks/useFilter'
import Button from '../components/button/Button'
import { PersonIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import Month from '../components/inputs/month/Month'
import SearchBar from '../components/inputs/searchbar/Searchbar'
import ButtonLink from '../components/button/ButtonLink'
import currentDate from '../assets/functions/currentDate'
import useChecked from '../assets/hooks/useChecked'
import useModal from '../assets/hooks/useModal'
import Confirm from '../components/modal/Confirm'

export default function Services() {
  const { services, client } = useLoaderData()
  // const id = useParams().client_id

  const [filter, setFilter] = useFilter()
  const checked = useChecked(services)

  const [ref, toggle] = useModal()
  // const [checked, anyChecked] = useChecked(clients)

  const handleSearch = (e) => setFilter('description', e.target.value)
  const handleMonth = (e) => setFilter('month', e.target.value)
  const handleDelete = () => checked.forAll(window.service.delete)

  return (
    <>
      <header className="header">
        <span>
          <h1 className="heading">Services - {client.name}</h1>
        </span>

        <span className="flex">
          <ButtonLink content="icon" variant="blue" size="40px" to="/">
            <PersonIcon width="20px" height="20px" />
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
        </span>
      </header>

      <div style={{ height: '40px' }} className="toolbar widget">
        <SearchBar onChange={handleSearch} />
        <Month onChange={handleMonth} />

        <ButtonLink content="text" to="create-service">
          Add Service
        </ButtonLink>

        <ButtonLink content="text" to={`edit-client/${client.id}`}>
          Edit Client
        </ButtonLink>
      </div>

      <div className="compartment">
        <DataTable data={services} checked={checked} action={action}>
          <Column field="description" header="Description" width="25%" />
          <Column field="date" header="Date" width="25%" />
          <Column field="unit_price" header="Unit Price" width="25%" />
          <Column field="item_number" header="Item Number" width="25%" />
        </DataTable>
      </div>

      <Outlet />

      <Confirm ref={ref} toggle={toggle} onConfirm={handleDelete}>
        <p>Are you sure you want to delete these clients</p>
      </Confirm>
    </>
  )
}

export const servicesLoader = async ({ params, request }) => {
  const searchParams = new URL(request.url).searchParams

  const description = searchParams.get('description') || ''
  const month = searchParams.get('month') || currentDate

  const client_name = await window.client.getName(params.client_id)
  const services = await window.service.readAll(params.client_id, month, description)

  const client = { id: params.client_id, name: client_name }
  return { client: client, services: services }
}

const action = (id) => {
  return (
    <ButtonLink content="icon" variant="action" size="18px" to={`edit-service/${id}`}>
      <Pencil2Icon width="18px" height="18px" />
    </ButtonLink>
  )
}
