import db from '../database'
import Service from '../models/service'

export default class ServiceManager {
  static create(data) {
    const service = Service.construct(data)
    // console.log('Data: ', data)
    // console.log('Service: ', service)
    service.create()
  }

  static read(id) {
    const query = `SELECT * FROM Service WHERE id = ?`
    return db.prepare(query).get(id)
  }

  static readAll(id, date, description = '') {
    const query = `
    SELECT id, description, item_number, client_id,
    strftime('%d/%m/%Y', date) AS date, minutes, service_type
    FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?
    AND Service.description LIKE ?
    ORDER BY date`

    const stmt = db.prepare(query).all(id, date, `%${description}%`)
    const services = []

    for (const service of stmt) {
      services.push(Service.construct(service))
    }

    return services
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
