import Database from 'better-sqlite3'

const db = new Database('client-manager.db')
db.pragma('journal_mode = WAL')

export { db }

// helper function
export function appendLastInsertId(data, property) {
  const id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  data[property] = id['LAST_INSERT_ROWID()']
}
