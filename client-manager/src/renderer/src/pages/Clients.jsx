import ClientForm from './ClientForm'

export default function Clients() {
  return (
    <>
      <section>
        <div className="toolbar">
          <input className="searchbar" type="search" />
          <input className="dateinput" type="month" />
          <button className="button">
            <span className="button-content">Generate Invoice</span>
          </button>
          <button className="button">Create Client</button>
        </div>
      </section>
      <section>
        <div style={{ height: '500px' }}>
          <ClientForm />
        </div>
      </section>

      {/* <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom</td>
              <td>tomrossmcgrath@gmail.com</td>
            </tr>
            <tr>
              <td>mum</td>
              <td>idk</td>
            </tr>
          </tbody>
        </table>
      </section> */}
    </>
  )
}
