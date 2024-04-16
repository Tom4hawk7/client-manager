import { db, appendLastInsertId } from './database'

import * as client from '../queries/client'
import * as parent from '../queries/parent'

// create
export function create(_event, clientData) {
  db.prepare(client.create).run(clientData)
  appendLastInsertId(clientData, 'client_id')

  db.prepare(parent.create).run(clientData)
}

// read
export function get(_event, id) {
  return db.prepare(client.form).get(id)
}

export function getAll(_event) {
  return db.prepare(client.view).all()
}

// update
export function update(_event, clientData) {
  db.prepare(client.update).run(clientData)
  db.prepare(parent.update).run(clientData)
}

// delete
export function remove(_event, id) {
  return db.prepare(client.remove).run(id)
}
