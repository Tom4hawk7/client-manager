import { store } from '../store'
import db from '../database'

const MINUTES_IN_HOUR = 60

export default class Service {
  // static ITEM_NUMBERS = new Set(['15_622_0128_1_3', '15_622_0118_1_3'])
  // static SERVICE_TYPES = new Set(['session', 'travel'])

  constructor(id = '', date, description, item_number, minutes, service_type, client_id) {
    this.id = parseInt(id)
    this.date = date
    this.description = description
    this.item_number = item_number
    this.client_id = parseInt(client_id)

    // Calculating unit price
    this.minutes = Number(minutes)
    this.service_type = service_type

    const hourly_rate =
      service_type === 'session' ? store.get('session_rate') : store.get('travel_rate')
    const hours_worked = this.minutes / MINUTES_IN_HOUR

    this.unit_price = (hourly_rate * hours_worked).toFixed(2)
  }

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

// export default class Service {
//   constructor(
//     date,
//     description,
//     item_number,
//     minutes,
//     unit_price,
//     client_id,
//     service_type,
//     id = ''
//   ) {
//     this.id = parseInt(id)
//     this.client_id = parseInt(client_id)
//     this.date = date
//     this.minutes = parseInt(minutes)
//     this.description = description
//     this.item_number = item_number
//     this.service_type = service_type
//     this.unit_price = Number(unit_price)
//   }

//   static construct({
//     date,
//     description,
//     item_number,
//     minutes,
//     unit_price,
//     client_id,
//     service_type,
//     id = ''
//   }) {
//     return new Service(
//       date,
//       description,
//       item_number,
//       minutes,
//       unit_price,
//       client_id,
//       service_type,
//       id
//     )
//   }

//   create() {
//     const query = `
//     INSERT INTO Service (description, date, item_number, minutes, unit_price, client_id, service_type)
//     VALUES (@description, @date, @item_number, @minutes, @unit_price, @client_id, @service_type);`

//     this.id = db.prepare(query).run({ ...this }).lastInsertRowid
//   }

//   update() {
//     const query = `
//     UPDATE Service SET
//     date = @date, description = @description,
//     item_number = @item_number, minutes = @minutes,
//     unit_price = @unit_price, service_type = @service_type
//     WHERE id = @id;`

//     db.prepare(query).run({ ...this })
//   }

//   delete() {
//     const query = `DELETE FROM Service WHERE id = ?;`
//     db.prepare(query).run(this.id)
//   }
// }

// export default class Service {
//   constructor(
//     date,
//     description,
//     item_number,
//     minutes,
//     unit_price,
//     client_id,
//     id = '',
//     service_type
//   ) {
//     this.id = parseInt(id)
//     this.date = date
//     this.description = description
//     this.item_number = item_number
//     this.minutes = parseInt(minutes)
//     this.unit_price = Number(unit_price)
//     this.client_id = parseInt(client_id)
//     this.service_type = service_type
//   }

//   static construct({
//     date,
//     description,
//     item_number,
//     minutes,
//     unit_price,
//     client_id,
//     id = '',
//     service_type
//   }) {
//     return new Service(
//       date,
//       description,
//       item_number,
//       minutes,
//       unit_price,
//       client_id,
//       id,
//       service_type
//     )
//   }

//   create() {
//     const query = `
//     INSERT INTO Service (description, date, item_number, minutes, unit_price, client_id, service_type)
//     VALUES (@description, @date, @item_number, @minutes, @unit_price, @client_id, @service_type);`

//     this.id = db.prepare(query).run({ ...this }).lastInsertRowid
//   }

//   update() {
//     const query = `
//     UPDATE Service SET
//     date = @date, description = @description,
//     item_number = @item_number, minutes = @minutes,
//     unit_price = @unit_price, service_type = @service_type
//     WHERE id = @id;`

//     db.prepare(query).run({ ...this })
//   }

//   delete() {
//     const query = `DELETE FROM Service WHERE id = ?;`
//     db.prepare(query).run(this.id)
//   }
// }
