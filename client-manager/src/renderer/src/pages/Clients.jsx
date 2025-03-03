import { useState } from 'react'
import ClientForm from './ClientForm'

export default function Clients() {
  const [checked, setChecked] = useState([])

  // checkbox functionality
  function initCheckboxes(res) {
    const tempCheckboxes = []

    for (let i = 0; i < res.length; i++) {
      tempCheckboxes.push({ id: res[i].id, ticked: false })
    }
    setChecked(tempCheckboxes)
  }

  function handleCheckboxClick(target_value, id) {
    const nextChecked = checked.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          ticked: target_value
        }
      } else {
        return row
      }
    })

    setChecked(nextChecked)
  }

  // find a way to update the UI
  function handleMasterCheckboxClick() {
    // const nextChecked = checked.map((row) => {
    //   return {
    //     ...row,
    //     ticked: true
    //   }
    // })
    // setChecked(nextChecked)
  }

  function handleInvoiceClick() {
    console.log(checked)
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
          <ClientForm
            initCheck={initCheckboxes}
            clickCheck={handleCheckboxClick}
            clickMasterCheck={handleMasterCheckboxClick}
          />
        </div>
      </section>
    </>
  )
}
