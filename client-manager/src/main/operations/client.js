import { db, appendLastInsertId } from '../database'

import * as client from '../queries/client'
import * as parent from '../queries/parent'
import * as manager from '../queries/manager'
import * as plan from '../queries/plan'

// create
export function create(_event, clientData) {
  db.prepare(client.create).run(clientData)
  appendLastInsertId(clientData, 'id')

  db.prepare(plan.create).run(clientData)
  appendLastInsertId(clientData, 'plan_id')

  db.prepare(manager.create).run(clientData)
  db.prepare(parent.create).run(clientData)
  return clientData.id
}

// read
export function getTable(_event) {
  return db.prepare(client.viewTable).all()
}

export function getForm(_event, clientId) {
  return db.prepare(client.viewForm).get(clientId)
}

// update
export function update(_event, clientData) {
  db.prepare(client.update).run(clientData)
  // db.prepare(plan.update).run(clientData)

  clientData['plan_id'] = db.prepare(plan.update).get(clientData).plan_id
  console.log(clientData)

  db.prepare(parent.update).run(clientData)
  db.prepare(manager.update).run(clientData)
}

// remove
export function remove(_event, clientId) {
  db.prepare(client.remove).run(clientId)
}
