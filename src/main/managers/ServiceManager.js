import { db } from '../database'

const stmtGet = `
  SELECT * FROM Service
  WHERE Service.client_id = ?
  AND SUBSTRING(Service.date, 1, 7) = ?;
`

export default class ServiceManager {
  static create() {}

  static read(id, date) {
    return db.prepare(stmtGet).all(id, date)
  }

  static update() {}
  static delete() {}
}
