import db from '../database'

import Client from '../models/client'
import Parent from '../models/parent'
import PlanManager from '../models/plan-manager'
import Plan from '../models/plan'

const classes = [
  [Client, 'client'],
  [Parent, 'parent'],
  [Plan, 'plan'],
  [PlanManager, 'planmanager']
]

export default class FormManager {
  // this kind of constructor could be in a parent component

  constructor(data) {
    // might have to make this conditional later
    const id = data.id
    delete data.id

    // sort formData into different objects by splitting class_prop
    const formData = {}
    for (const [key, value] of Object.entries(data)) {
      const [className, propName] = key.split(/_(.*)/, 2)
      formData[className] = { ...formData[className], [propName]: value }
    }

    // append the id to objects and use it to create the specified models
    const models = []
    for (const [keyClass, i] of classes) {
      let obj = formData[i]
      obj.id = id

      let model = keyClass.construct(obj)
      models.push(model)
    }

    this.models = models
  }

  create() {
    this.models.forEach((model) => model.create())
  }

  static read(id) {
    const query = `SELECT
    Client.id,
    Client.name AS client_name,
    Client.dob AS client_dob,
    Client.address AS client_address,
    Client.school AS client_school,
    Client.p_number AS client_p_number,
    Parent.name AS parent_name,
    Parent.email AS parent_email,
    Parent.phone AS parent_phone,
    Plan.start_date AS plan_start_date,
    Plan.end_date AS plan_end_date,
    Plan.budget AS plan_budget,
    PlanManager.name AS planmanager_name,
    PlanManager.email AS planmanager_email
      FROM Client
    INNER JOIN Parent ON Client.id = Parent.id
    INNER JOIN Plan ON Client.id = Plan.id
    INNER JOIN PlanManager ON Client.id = PlanManager.id
      WHERE Client.id = ?
    `

    return db.prepare(query).get(id)
  }

  update() {
    this.models.forEach((model) => model.update())
    // perhaps delete the object after
  }

  static delete(id) {
    db.prepare('DELETE FROM Client WHERE id = ?').run(id)
  }
}
