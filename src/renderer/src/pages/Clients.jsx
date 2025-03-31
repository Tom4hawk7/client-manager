import { useState, useEffect } from 'react'
import ClientTable from './ClientTable'

const currentDate = new Date()
const dateMonthIso = currentDate.toISOString().substring(0, 7)
// YYYY-MM
// Need to somehow set the text to the current
// Perhaps you have two different dates since you can use the toFunction() to get different outputs
// Perhaps you could just have it be the default input that if it is undefined then it is the current date

export default function Clients() {
  const [selected, setSelected] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {}, [])

  // console.log(currentDate.toISOString())
  console.log(dateMonthIso)

  function handleInvoiceClick() {
    console.log(selected)
  }

  return (
    <>
      <section className="compartment">
        <div className="toolbar widget">
          <input className="searchbar" type="search" />
          <input onChange={(e) => console.log(e.target.value)} className="dateinput" type="month" />
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
