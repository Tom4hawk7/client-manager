import { insertOperations, insertOperationsKeys } from './insert'
import Database from 'better-sqlite3'

const db = new Database('src\\client-manager.db')

// helper functions
function executeOperations(clientData, operations) {
  operations.forEach((operation) => {
    db.prepare(operation).run(clientData)
  })
}

// insert helper functions
function appendLastInsertId(clientData, property) {
  const id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  clientData[property] = id['LAST_INSERT_ROWID()']
}

function executeOperationKeys(clientData, operations) {
  for (const key in operations) {
    db.prepare(operations[key]).run(clientData)
    appendLastInsertId(clientData, key)
  }
}

// main database operations
export function createClient(_event, clientData) {
  executeOperationKeys(clientData, insertOperationsKeys)
  executeOperations(clientData, insertOperations)
}

export function retrieveClients(_event) {
  return db.prepare('SELECT * FROM Client').all()
}
