import db from '../database'

export default class ServiceManager {
  static create() {}

  static read(id, date) {
    const query = `
    SELECT * FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?;`

    return db.prepare(query).all(id, date)
  }

  static update() {}
  static delete() {}
}
