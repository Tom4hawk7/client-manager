import Card from '../components/Card'
import addClient from '../assets/svg/person-add.svg'
import { Link } from 'react-router-dom'

export default function ClientView() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Card>
        <Link to="/client-form">
          <img src={addClient} width="36" height="36" />
        </Link>
      </Card>
      <Card>
        <button onClick={ipcHandle}>Send ping</button>
      </Card>
    </>
  )
}
// className="icon"
