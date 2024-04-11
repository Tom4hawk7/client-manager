import Database from 'better-sqlite3'
import * as insert from './insert'

const db = new Database('src\\client-manager.db')

function appendLastInsertID(object, property) {
  const id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  object[property] = id['LAST_INSERT_ROWID()']
}

export function createClient(_event, clientData) {
  db.prepare(insert.client).run(clientData)
  appendLastInsertID(clientData, 'client_id')

  db.prepare(insert.plan_manager).run(clientData)
  appendLastInsertID(clientData, 'plan_manager_id')

  db.prepare(insert.address).run(clientData)
  db.prepare(insert.parent).run(clientData)
  db.prepare(insert.plan).run(clientData)
}
