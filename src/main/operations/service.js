import { db } from '../database'

// create

// read
export function getAll(e, id, date) {
  console.log(id)
  console.log(date)

  return db
    .prepare(
      `SELECT * FROM Service
    WHERE Service.client_id = ?
    AND SUBSTRING(Service.date, 1, 7) = ?;`
    )
    .all(id, date)
}

// update

// delete
