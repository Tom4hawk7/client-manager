import { db } from '../database'

export default class Service {
  constructor(id, date, description, item_number, unit_price, client_id) {
    this.id = id
    this.date = date
    this.description = description
    this.item_number = item_number
    this.unit_price = unit_price
    this.client_id = client_id
  }

  static getAll(e, id, date) {
    return db
      .prepare(
        `SELECT * FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?;`
      )
      .all(id, date)
  }

  set(date, description, item_number, unit_price) {
    this.date = date
    this.description = description
    this.item_number = item_number
    this.unit_price = unit_price
  }
}
