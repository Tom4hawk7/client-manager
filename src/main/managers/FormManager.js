import { db } from '../database'

export default class FormManager {
  static create(data) {}

  static read(id) {
    return db.prepare('SELECT * FROM VForm WHERE id = ?').get(id)
  }

  static update(data) {}
  static delete() {}
}
