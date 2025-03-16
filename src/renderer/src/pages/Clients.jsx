import { useState } from 'react'
import ClientTable from './ClientTable'

export default function Clients() {
  const [selected, setSelected] = useState([])

  function handleInvoiceClick() {
    console.log(selected)
  }

  return (
    <>
      <section className="compartment">
        <div className="toolbar widget">
          <input className="searchbar" type="search" />
          <input className="dateinput" type="month" />
          <button className="button" onClick={handleInvoiceClick}>
            Generate Invoice
          </button>
          <button className="button">Create Client</button>
        </div>

        <div className="widget">
          <ClientTable selected={selected} setSelected={setSelected} />
        </div>
      </section>
    </>
  )
}
