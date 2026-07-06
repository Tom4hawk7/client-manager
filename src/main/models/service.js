import db from '../database'

const MINUTES_IN_HOUR = 60
const SESSION_RATE = 193.99
const TRAVEL_RATE = 97.0

const serviceBilling = {
  "DS": "session",
  "PT": "travel",
  "TH": "session",
  "CA": "session",
  "NF": "session",
  "RR": "session"
}


export default class Service {
  constructor(id = '', date, description, item_number, minutes, service_type, client_id) {
    this.id = parseInt(id)
    this.client_id = parseInt(client_id)

    this.service_type = service_type 
    
    this.date = date
    this.description = description
    this.item_number = item_number
    
    // Calculating unit price
    this.minutes = Number(minutes)
    
    this.hourly_rate = serviceBilling[service_type] === 'session' 
      ? SESSION_RATE.toFixed(2) 
      : TRAVEL_RATE.toFixed(2)
    
    const hours_worked = this.minutes / MINUTES_IN_HOUR
    this.unit_price = (this.hourly_rate * hours_worked).toFixed(2)
  }

  // add getter for base item_number (just do .slice())


  static construct({ id = '', date, description, item_number, minutes, service_type, client_id }) {
    return new Service(id, date, description, item_number, minutes, service_type, client_id)
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
