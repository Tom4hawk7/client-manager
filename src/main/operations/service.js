import { db } from '../database'

export function getAll(date) {
  const dateMonth = date.substring(0, 7)
  return db.prepare('SELECT * FROM Service WHERE SUBSTRING(Service.date, 1, 7) = ?').all(dateMonth)
}
