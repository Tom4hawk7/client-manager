import Database from 'better-sqlite3'

export const db = new Database('src\\client-manager.db')

// helper functions
export function appendLastInsertId(clientData, property) {
  const id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  clientData[property] = id['LAST_INSERT_ROWID()']
}
