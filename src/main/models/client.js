import { db } from '../database'

export default class Client {
  constructor(id, name, dob, address, school, p_number) {
    this.id = id
    this.name = name
    this.dob = dob
    this.address = address
    this.school = school
    this.p_number = p_number
  }

  //   perhaps this could be an inherited method somehow - very useful for creating a new client based off old one
  static create(client) {
    return Object.assign(new Client(), client)
  }

  set(name, dob, address, school) {
    this.name = name
    this.dob = dob
    this.address = address
    this.school = school
  }

  //   insert() {}
  //   update() {}
  //   delete() {}
}
