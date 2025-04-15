export default class Plan {
  constructor(id, start_date, end_date, budget, client_id) {
    this.id = id
    this.client_id = client_id
    this.start_date = start_date
    this.end_date = end_date
    this.budget = budget
  }

  static create(plan) {
    return Object.assign(new Plan(), plan)
  }

  set(start_date, end_date, budget) {
    this.start_date = start_date
    this.end_date = end_date
    this.budget = budget
  }
}
