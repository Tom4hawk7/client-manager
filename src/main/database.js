import Database from 'better-sqlite3'

const db = new Database('src\\client-manager.db')

function createClient(_event, clientData) {
  // first turn string into float
  clientData['budget'] = parseFloat(clientData['budget'])

  // insert values into client table
  const insertClient = db.prepare(`
            INSERT INTO Client (name, dob, participant_number)
            VALUES (@client_name, @dob, @participant_number)
        `)

  insertClient.run(clientData)

  // obtain the clientId and add it to clientData for future inserts
  const clientId = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  clientData['client_id'] = clientId['LAST_INSERT_ROWID()']

  // insert values into address table
  const insertAddress = db.prepare(`
              INSERT INTO Address (street, suburb, state, code, client_id)
              VALUES (@street, @suburb, @state, @code, @client_id)
          `)

  insertAddress.run(clientData)

  // insert values into parent table
  const insertParent = db.prepare(`
            INSERT INTO Parent (name, email, phone, client_id)
            VALUES (@parent_name, @parent_email, @phone, @client_id)
        `)

  insertParent.run(clientData)

  // insert values into plan-manager table
  const insertPlanManager = db.prepare(`
            INSERT INTO PlanManager (name, email)
            VALUES (@plan_manager_name, @plan_manager_email)
        `)

  insertPlanManager.run(clientData)

  // need to get plan_manager_id now
  const plan_manager_id = db.prepare(`SELECT LAST_INSERT_ROWID()`).get()
  clientData['plan_manager_id'] = plan_manager_id['LAST_INSERT_ROWID()']

  // insert values in plan table
  const insertPlan = db.prepare(`
        INSERT INTO Plan (start_date, end_date, budget, plan_manager_id, client_id)
        VALUES (@start_date, @end_date, @budget, @plan_manager_id, @client_id)
      `)

  insertPlan.run(clientData)
}
export { createClient }
