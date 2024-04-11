export const client =
  'INSERT INTO Client (name, dob, participant_number) ' +
  'VALUES (@client_name, @dob, @participant_number)'

export const address =
  'INSERT INTO Address (street, suburb, state, code, client_id) ' +
  'VALUES (@street, @suburb, @state, @code, @client_id)'

export const parent =
  'INSERT INTO Parent (name, email, phone, client_id) ' +
  'VALUES (@parent_name, @parent_email, @phone, @client_id)'

export const plan_manager =
  'INSERT INTO PlanManager (name, email) ' + 'VALUES (@plan_manager_name, @plan_manager_email)'

export const plan =
  'INSERT INTO Plan (start_date, end_date, budget, plan_manager_id, client_id) ' +
  'VALUES (@start_date, @end_date, @budget, @plan_manager_id, @client_id)'
