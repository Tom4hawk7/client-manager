import { db } from '../database'

// export class ClientHandler {
//   constructor(id = "") {
//     this.id = id
//   }

// }

// .columns() -> array of objects
// look into that when calling multiple objects and stuff

// could put an Object.assign thingo into a super constructor or setter function

export default class Client {
  constructor(id, name, dob, address, school, p_number) {
    // if (typeof id === 'object') { could do this
    //   this.id = id.id
    //   this.name = id.name
    // }
    this.id = id
    this.name = name
    this.dob = dob
    this.address = address
    this.school = school
    this.p_number = p_number
  }

  //   perhaps this could be an inherited method somehow
  //   very useful for creating a new client based off
  static create(client) {
    return Object.assign(new Client(), client)
  }

  static getAll() {
    // const stmt = db.prepare('SELECT * FROM Client').all()
    const stmt = db.prepare('SELECT * FROM Client')
    const clientList = []

    // console.log(stmt)
    for (const row of stmt.iterate()) {
      clientList.push(Client.create(row))
      //   clientList.push(Object.assign(new Client(), row))
    }
    //   const client = Object.assign(new Client(), row) // this works
    // return stmt

    return clientList
  }

  //   insert() {}
  //   update() {}
  //   delete() {}
}
