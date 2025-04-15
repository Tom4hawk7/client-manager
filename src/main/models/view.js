import { db } from '../database'
import Client from './client'
import Parent from './parent'
import Plan from './plan'
import PlanManager from './planmanager'

// need to make formStmt and other statement a stored function in the database

const formStmt = `SELECT * FROM Client
  INNER JOIN Parent ON Client.id = Parent.client_id
  INNER JOIN Plan ON Client.id = Plan.client_id
  INNER JOIN PlanManager ON Plan.id = PlanManager.plan_id
  WHERE Client.id = ?`

export default class View {
  static table() {
    return db.prepare('SELECT * FROM VTable').all()
  }

  static form(e, id) {
    const stmt = db.prepare(formStmt).expand().get(id)

    // figure out how to iterate over an object later
    const info_list = []
    info_list.push(Client.create(stmt.Client))
    info_list.push(Parent.create(stmt.Parent))
    info_list.push(Plan.create(stmt.Plan))
    info_list.push(PlanManager.create(stmt.PlanManager))

    return info_list
  }
}
