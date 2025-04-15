export default class Parent {
  constructor(id = '', name, email, phone) {
    this.id = parseInt(id)
    this.name = name
    this.email = email
    this.phone = phone
  }

  create() {
    const query = `
      INSERT INTO Parent (id, name, email, phone)
      VALUES (@id, @name, @email, @phone)`

    db.prepare(query).run(this)
  }

  update() {
    const query = `
      UPDATE Parent SET name = @name, 
      email = @email, phone = @phone
      WHERE id = @id`

    db.prepare(query).run(this)
  }
}
