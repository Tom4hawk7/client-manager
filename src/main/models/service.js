import db from '../database'

export default class Service {
  constructor(date, description, item_number, minutes, unit_price, client_id, id = '') {
    this.id = parseInt(id)
    this.date = date
    this.description = description
    this.item_number = item_number
    this.minutes = minutes
    this.unit_price = unit_price
    this.client_id = parseInt(client_id)
  }

  static construct({ date, description, item_number, minutes, unit_price, client_id, id = '' }) {
    return new Service(date, description, item_number, minutes, unit_price, client_id, id)
  }

  create() {
    const query = `
    INSERT INTO Service (description, date, item_number, minutes, unit_price, client_id)
    VALUES (@description, @date, @item_number, @minutes, @unit_price, @client_id);`

    this.id = db.prepare(query).run({ ...this }).lastInsertRowid
  }

  update() {
    const query = `
    UPDATE Service SET 
    date = @date, description = @description, 
    item_number = @item_number, minutes = @minutes,
    unit_price = @unit_price
    WHERE id = @id;`

    db.prepare(query).run({ ...this })
  }

  delete() {
    const query = `DELETE FROM Service WHERE id = ?;`
    db.prepare(query).run(this.id)
  }
}
