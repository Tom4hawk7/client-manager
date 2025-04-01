import { db } from '../database'

// create

// read
export function getAll() {
  return db.prepare('SELECT * FROM VPlan').all()
}

// update

// delete
