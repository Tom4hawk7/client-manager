import { db } from '../database'

export default class Form {
  static get(e, id) {
    return db.prepare('SELECT * FROM VForm WHERE id = ?').get(id)
  }

  static update() {}
  static insert() {}
  static remove() {}
}
