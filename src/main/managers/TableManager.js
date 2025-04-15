import { db } from '../database'

export default class TableManager {
  static create() {}

  static read() {
    return db.prepare('SELECT * FROM VTable').all()
  }

  static update() {}
  static delete() {}
}
