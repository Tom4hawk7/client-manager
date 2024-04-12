const client =
  'INSERT INTO Client (name, dob, address, school, participant_number) ' +
  'VALUES (@client_name, @dob, @address, @school, @participant_number)'

const parent =
  'INSERT INTO Parent (name, email, phone, client_id) ' +
  'VALUES (@parent_name, @parent_email, @phone, @client_id)'

const plan_manager =
  'INSERT INTO PlanManager (name, email) ' + 'VALUES (@plan_manager_name, @plan_manager_email)'

const plan =
  'INSERT INTO Plan (start_date, end_date, budget, plan_manager_id, client_id) ' +
  'VALUES (@start_date, @end_date, @budget, @plan_manager_id, @client_id)'

export const insertOperations = [parent, plan]
export const insertOperationsKeys = { client_id: client, plan_manager_id: plan_manager }
