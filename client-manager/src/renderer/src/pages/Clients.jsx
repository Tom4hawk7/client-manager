export default function Clients() {
  return (
    <>
      <section>
        <div className="toolbar">
          <input className="searchbar" type="search" />
          <button className="button">Create Client</button>
        </div>
      </section>
      <section>
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
      </section>
    </>
  )
}
