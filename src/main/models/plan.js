import db from '../database'

export default class Plan {
  constructor(start_date, end_date, budget, id = '') {
    this.id = parseInt(id)
    this.start_date = start_date
    this.end_date = end_date
    this.budget = budget
  }

  static construct({ start_date, end_date, budget, id = '' }) {
    return new Plan(start_date, end_date, budget, id)
  }

  create() {
    const query = `
    INSERT INTO Plan (id, start_date, end_date, budget)
    VALUES (@id, @start_date, @end_date, @budget);`

    db.prepare(query).run({ ...this })
  }

  update() {
    const query = `
    UPDATE Plan SET start_date = @start_date, 
    end_date = @end_date, budget = @budget
    WHERE id = @id;`

    db.prepare(query).run({ ...this })
  }
}
