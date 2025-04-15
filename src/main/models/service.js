export default class Service {
  constructor(id = '', date, description, item_number, unit_price, client_id) {
    this.id = parseInt(id)
    this.date = date
    this.description = description
    this.item_number = item_number
    this.unit_price = unit_price
    this.client_id = parseInt(client_id)
  }

  create() {
    const query = `
    INSERT INTO Service (date, description, item_number, unit_price, client_id)
    VALUES (@description, @item_number, @unit_price, @client_id)`

    db.prepare(query).run(this)
    // append id to properties after this is done
  }

  update() {
    const query = `
    UPDATE Service SET 
    date = @date, description = @description, 
    item_number = @item_number, unit_price = @unit_price
    WHERE id = @id`

    db.prepare(query).run(this)
  }

  delete() {
    const query = `DELETE FROM Service WHERE id = ?`
    db.prepare(query).run(this.id)
  }
}
