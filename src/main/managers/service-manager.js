import db from '../database'

export default class ServiceManager {
  static create() {}

  static read(id, date, description) {
    const query = `
    SELECT * FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?
    AND Service.description LIKE ?;`

    return db.prepare(query).all(id, date, `${description}%`)
  }

  static update() {}
  static delete() {}
}
