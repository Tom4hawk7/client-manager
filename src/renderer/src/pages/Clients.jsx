// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useLoaderData } from 'react-router'
import { PersonIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import useChecked from '../assets/hooks/useChecked'
import currentDate from '../assets/functions/currentDate'
// import { Icon } from '../components/button/Icon'
// import ClientForm from './ClientForm'

export default function Clients() {
  const data = useLoaderData()
  const checked = useChecked(data)

  const [date, setDate] = useState(currentDate)
  const [filteredData, setFilteredData] = useState(data)
  // const [search, setSearch] = useState() not sure if need this

  // dataTable state

  // console.log(data)

  function handleSearch(e) {
    setFilteredData(
      data.filter((data) => {
        const name = data.name.toLowerCase()
        const search = e.target.value.toLowerCase()

        return name.includes(search)
      })
    )

    // const filteredData = data.filter((data) => {
    //   const name = data.name.toLowerCase()
    //   const search = e.target.value.toLowerCase()

    //   return name.includes(search)
    // })
    // data.name.includes(e.target.value))
    // console.log(filteredData)
  }

  function handleInvoice() {
    console.log('Checked: ', checked.getAll())
    console.log('Date: ', date)
  }

  return (
    <>
      <div className="toolbar widget">
        <input className="searchbar" type="search" onChange={handleSearch} />
        <input
          className="dateinput"
          type="month"
          defaultValue={currentDate}
          onChange={(e) => setDate(e)}
        />
        <button className="button" onClick={handleInvoice}>
          Generate Invoice
        </button>
        <button className="button">Create Client</button>
      </div>
      <div className="compartment">
        <DataTable
          data={filteredData}
          checked={checked}
          action={{ to: '/services', icon: <PersonIcon className="icon" /> }}
        >
          <Column field="name" header="Name" />
          <Column field="p_name" header="Parent" />
          <Column field="address" header="Address" />
          <Column field="p_phone" header="Contact" />
          <Column field="school" header="School" />
        </DataTable>
      </div>
    </>
  )
}
