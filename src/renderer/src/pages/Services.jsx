import { useLoaderData, useLocation } from 'react-router'

// might need to add a clients home page button

export default function Services() {
  const client = useLocation().state
  const params = useLoaderData()

  console.log('params: ', params)
  console.log('client: ', client)

  return (
    <>
      <div className="toolbar widget">
        <button className="button">Add Service </button>
        <input className="dateinput" type="month" />
        {/* <input className="searchbar" type="search" /> */}
        <button className="button">Edit Client</button>
        <button className="button">Delete Client</button>
      </div>
    </>
  )
}
