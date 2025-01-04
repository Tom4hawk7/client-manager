// create
export const create = `INSERT INTO Client (name, dob, address, school, participant_number)
  VALUES (@client_name, @client_dob, @client_address, @client_school, @client_participant_number)`

// read
export const viewTable = `SELECT * FROM VClientTable`

export const viewForm = `
  SELECT 
    Client.dob                  AS client_dob,
    Client.participant_number   AS client_participant_number,
    Parent.name                 AS parent_name,
    Parent.email                AS parent_email,
    Parent.phone                AS parent_phone,
    Plan.start_date             AS plan_start_date,
    Plan.end_date               AS plan_end_date,
    Plan.budget                 AS plan_budget,
    PlanManager.name            AS plan_manager_name,
    PlanManager.email           AS plan_manager_email
  FROM Client
  JOIN Parent       ON Client.client_id = Parent.client_id
  JOIN Plan         ON Client.client_id = Plan.client_id
  JOIN PlanManager  ON Plan.plan_id = PlanManager.plan_id
  WHERE Client.client_id = ?
`

// update
export const update =
  'UPDATE Client ' +
  'SET name = @client_name, ' +
  'dob = @client_dob, ' +
  'school = @client_school, ' +
  'address = @client_address, ' +
  'participant_number = @client_participant_number ' +
  'WHERE client_id = @id'

// delete
export const remove = `
  DELETE FROM Client
  WHERE client_id = ?
`
