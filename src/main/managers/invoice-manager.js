import ServiceManager from './service-manager'
import { dialog } from 'electron/main'
import db from '../database'
import { createDoc } from '../invoicer/invoice'
import { data } from 'react-router'

const currentDate = new Date()

const query = `
SELECT 
  Client.name AS client_name,
  Client.dob AS client_dob,
  Client.p_number AS client_p_number,
  Client.address AS client_address,
  Parent.name AS parent_name,
  PlanManager.name AS plan_manager_name,
  PlanManager.email AS plan_manager_email
FROM Client
  LEFT JOIN Parent ON Client.id = Parent.id
  LEFT JOIN PlanManager ON Client.id = PlanManager.id
WHERE Client.id = ?`

export default class InvoiceManager {
  static async generate(checked, month) {
    // open dialog and check if it was cancelled
    const res = await handleDialog()
    if (res.canceled) return

    for (const id of checked) {
      // get data from database
      const [services, total] = getServices(id, month)
      const invoiceData = db.prepare(query).get(id)

      // insert entry into the invoice
      const clientName = invoiceData.client_name.replace(' ', '-')
      const invoiceNum = InvoiceManager.increment()
      // const invoiceNum = db.prepare('INSERT INTO Invoice DEFAULT VALUES').run().lastInsertRowid

      // add entries into invoice data
      invoiceData.services = services
      invoiceData.total = total
      invoiceData.current_date = currentDate.toLocaleDateString()
      invoiceData.invoice = invoiceNum

      // set the outputDir and outputName

      const outputName = `${clientName}_${invoiceNum}`
      const outputDir = res.filePaths[0]

      createDoc(outputDir, outputName, invoiceData)
    }
  }

  static getId() {
    const query = `SELECT MAX(id) AS id FROM Invoice`
    return db.prepare(query).get()
  }

  static setId(id) {
    const query = `INSERT INTO Invoice (id) VALUES (?)
    ON CONFLICT (id) DO NOTHING`

    return db.prepare(query).run(id)
  }

  static increment() {
    const query = `INSERT INTO Invoice DEFAULT VALUES`
    return db.prepare(query).run().lastInsertRowid
  }
}

async function handleDialog() {
  const res = await dialog.showOpenDialog({
    title: 'Save invoices',
    buttonLabel: 'Save',
    message: 'message',
    properties: ['openDirectory', 'createDirectory', 'promptToCreate']
  })

  return res
}

function getServices(id, month) {
  const services = ServiceManager.readAll(id, month)
  let total = 0

  // calculate the total price
  for (const service of services) {
    total += Number(service.unit_price)
  }

  return [services, total]
}
