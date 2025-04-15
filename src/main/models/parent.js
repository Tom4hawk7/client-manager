export default class Parent {
  constructor(id, name, email, phone, client_id) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.client_id = client_id
  }

  static create(parent) {
    return Object.assign(new Parent(), parent)
  }

  set(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }
}
