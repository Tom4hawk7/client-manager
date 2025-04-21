import db from '../database'

export default class TableManager {
  static create() {}

  static read(name) {
    return db.prepare(`SELECT * FROM VTable WHERE client_name LIKE ?`).all(`%${name}%`)
  }

  static update() {}
  static delete() {}
}
