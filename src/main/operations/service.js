import { db } from '../database'

// create

// read
export function getAll(e, id, date) {
  const data = db
    .prepare(
      `SELECT * FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?;`
    )
    .all(id, date)

  return data
}

// update

// delete
