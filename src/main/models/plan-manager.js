import db from '../database'

export default class PlanManager {
  constructor(name, email, id = '') {
    this.id = parseInt(id)
    this.name = name
    this.email = email
  }

  static construct({ name, email, id = '' }) {
    return new PlanManager(name, email, id)
  }

  create() {
    const query = `
    INSERT INTO PlanManager (id, name, email)
    VALUES (@id, @name, @email);`

    db.prepare(query).run({ ...this })
  }

  update() {
    const query = `
    UPDATE PlanManager SET name = @name, 
    email = @email WHERE id = @id;`

    db.prepare(query).run({ ...this })
  }
}
