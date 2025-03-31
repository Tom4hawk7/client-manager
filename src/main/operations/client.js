import { db } from '../database'

export function getAll() {
  return db.prepare('SELECT * FROM VClient').all()
}
