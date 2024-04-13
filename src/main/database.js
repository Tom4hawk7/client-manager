import { clientFormEntries, clientViewEntries } from './select'
import * as update from './update'
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
  db.prepare(insert.client).run(clientData)
  appendLastInsertId(clientData, 'client_id')

  db.prepare(insert.parent).run(clientData)
}

export function updateClient(_event, client) {
  // console.log(client)
  db.prepare(update.updateClientInfo).run(client)
  db.prepare(update.updateParentInfo).run(client)
}

export function getClients(_event) {
  return db.prepare(clientViewEntries).all()
}

export function getClient(_event, id) {
  return db.prepare(clientFormEntries).get(id)
}
