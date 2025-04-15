import { db } from '../database'

export default class Table {
  static get() {
    return db.prepare('SELECT * FROM VTable').all()
  }

  static update() {}
  static insert() {}
  static remove() {}
}
