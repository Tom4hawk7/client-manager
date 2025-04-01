import { useState, useEffect } from 'react'
import ClientTable from './ClientTable'

const currentDate = new Date().toISOString()

export default function Clients() {
  const [selected, setSelected] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    handleDateChange(currentDate)
  }, [])

  function handleDateChange(date) {
    console.log(date)
    const serviceData = async () => window.service.getAll(date)
    serviceData().then((res) => setServices(res))
  }

  function handleInvoiceClick() {
    console.log('selected: ', selected)
  }

  return (
    <>
      <section className="compartment">
        <div className="toolbar widget">
          <input className="searchbar" type="search" />
          <input
            onChange={(e) => handleDateChange(e.target.value)}
            className="dateinput"
            type="month"
          />
          <button className="button" onClick={handleInvoiceClick}>
            Generate Invoice
          </button>
          <button className="button">Create Client</button>
        </div>

        <div className="widget">
          <ClientTable selected={selected} setSelected={setSelected} services={services} />
        </div>
      </section>
    </>
  )
}
