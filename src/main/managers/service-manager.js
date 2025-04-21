import db from '../database'
import Service from '../models/service'

export default class ServiceManager {
  static create(data) {
    const service = Service.construct(data)
    service.create()
  }

  static read(id) {
    const query = `SELECT * FROM Service WHERE id = ?`
    return db.prepare(query).get(id)
  }

  static readAll(id, date, description) {
    const query = `
    SELECT * FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?
    AND Service.description LIKE ?;`

    return db.prepare(query).all(id, date, `%${description}%`)
  }

  static update(data) {
    const service = Service.construct(data)
    service.update()
  }

  static delete(id) {
    const query = `DELETE FROM Service WHERE id = ?`
    db.prepare(query).run(id)
  }
}
