import { clientFormEntries, clientViewEntries } from './select'
import * as insert from './insert'
import Database from 'better-sqlite3'

const db = new Database('src\\client-manager.db')

// helper functions
function appendLastInsertId(clientData, property) {
  const id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  clientData[property] = id['LAST_INSERT_ROWID()']
}

// main database operations
export function createClient(_event, clientData) {
  clientData['budget'] = parseFloat(clientData['budget'])

  db.prepare(insert.client).run(clientData)
  appendLastInsertId(clientData, 'client_id')

  db.prepare(insert.plan_manager).run()
}

export function getClients(_event) {
  return db.prepare(clientViewEntries).all()
}

export function getClient(_event, id) {
  return db.prepare(clientFormEntries).get(id)
  // return 7
}
