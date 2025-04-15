import { db } from '../database'

export default class Client {
  constructor(id = '', name, dob, address, school, p_number) {
    this.id = parseInt(id)
    this.name = name
    this.dob = dob
    this.address = address
    this.school = school
    this.p_number = p_number
  }

  create() {
    const query = `
    INSERT INTO Client (name, dob, address, school, p_number)
    VALUES (@name, @dob, @address, @school, @p_number)`

    db.prepare(query).run(this)

    // have it append id after creation
    // .run().lastinsertid or something
  }

  update() {
    const query = `
    UPDATE Client SET name = @name, 
    dob = @dob, address = @address, 
    school = @school, p_number = @p_number
    WHERE id = @id`

    db.prepare(query).run(this)
  }

  delete() {
    const query = `DELETE FROM Client WHERE id = ?`
    db.prepare(query).run(this.id)
  }
}
