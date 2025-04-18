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
    const id = this.models[0].id
    console.log('id')
    return db.prepare('SELECT * FROM VTable WHERE id = ?').get(id)
  }

  static read(id) {
    return db.prepare('SELECT * FROM VForm WHERE id = ?').get(id)
  }

  update() {
    this.models.forEach((model) => model.update())
    // perhaps delete the object after
  }

  static delete(id) {
    db.prepare('DELETE FROM Client WHERE id = ?').run(id)
  }
}
