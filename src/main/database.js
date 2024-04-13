import * as insert from './insert'
import { clientViewEntries } from './select'
import Database from 'better-sqlite3'

const db = new Database('src\\client-manager.db')

// insert helper functions
function appendLastInsertId(clientData, property) {
  const id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  clientData[property] = id['LAST_INSERT_ROWID()']
}

// helper functions
// function executeOperations(clientData, operations) {
//   operations.forEach((operation) => {
//     db.prepare(operation).run(clientData)
//   })
// }

// function executeOperationKeys(clientData, operations) {
//   for (const key in operations) {
//     db.prepare(operations[key]).run(clientData)
//     appendLastInsertId(clientData, key)
//   }
// }

// main database operations
export function createClient(_event, clientData) {
  clientData['budget'] = parseFloat(clientData['budget'])

  db.prepare(insert.client).run(clientData)
  appendLastInsertId(clientData, 'client_id')

  db.prepare(insert.plan_manager).run()
}

export function retrieveClients(_event) {
  return db.prepare(clientViewEntries).all()
}
