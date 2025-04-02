// import DataTable from '../components/data-table/DataTable'
import { DataTable, Column } from '../components/data-table/DataTable'
import { useLoaderData } from 'react-router'
import useChecked from '../assets/hooks/useChecked'
import { useState } from 'react'

export default function Test() {
  const data = useLoaderData()
  const checked = useChecked(data)

  return (
    <>
      <div className="toolbar widget">
        <input className="searchbar" type="search" />
        <input className="dateinput" type="month" />
        <button className="button" onClick={() => console.log(checked.getAll())}>
          Generate Invoice
        </button>
        <button className="button">Create Client</button>
      </div>
      <DataTable data={data} checked={checked}>
        <Column field="name" header="Name" />
        <Column field="p_name" header="Parent" />
        <Column field="address" header="Address" />
        <Column field="p_phone" header="Contact" />
        <Column field="school" header="School" />
      </DataTable>
    </>
  )
}
