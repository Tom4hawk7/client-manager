import db from '../database'

export default class Parent {
  constructor(name, email, phone, id = '') {
    this.id = parseInt(id)
    this.name = name
    this.email = email
    this.phone = phone
  }

  static construct({ name, email, phone, id = '' }) {
    return new Parent(name, email, phone, id)
  }

  create() {
    const query = `
      INSERT INTO Parent (id, name, email, phone)
      VALUES (@id, @name, @email, @phone);`

    db.prepare(query).run({ ...this })
  }

  update() {
    const query = `
      UPDATE Parent SET name = @name, 
      email = @email, phone = @phone
      WHERE id = @id;`

    db.prepare(query).run({ ...this })
  }
}
