import db from '../database'

export default class Service {
  constructor(
    date,
    description,
    item_number,
    minutes,
    unit_price,
    client_id,
    id = '',
    service_type
  ) {
    this.id = parseInt(id)
    this.date = date
    this.description = description
    this.item_number = item_number
    this.minutes = minutes
    this.unit_price = unit_price
    this.client_id = parseInt(client_id)
    this.service_type = service_type
  }

  static construct({
    date,
    description,
    item_number,
    minutes,
    unit_price,
    client_id,
    id = '',
    service_type
  }) {
    return new Service(
      date,
      description,
      item_number,
      minutes,
      unit_price,
      client_id,
      id,
      service_type
    )
  }

  create() {
    const query = `
    INSERT INTO Service (description, date, item_number, minutes, unit_price, client_id, service_type)
    VALUES (@description, @date, @item_number, @minutes, @unit_price, @client_id, @service_type);`

    this.id = db.prepare(query).run({ ...this }).lastInsertRowid
  }

  update() {
    const query = `
    UPDATE Service SET 
    date = @date, description = @description, 
    item_number = @item_number, minutes = @minutes,
    unit_price = @unit_price, service_type = @service_type
    WHERE id = @id;`

    db.prepare(query).run({ ...this })
  }

  delete() {
    const query = `DELETE FROM Service WHERE id = ?;`
    db.prepare(query).run(this.id)
  }
}
