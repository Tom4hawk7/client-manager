import { db } from '../database'

// create

// read
export function getAll() {
  return db.prepare('SELECT * FROM VClient').all()
}

// update

// delete
