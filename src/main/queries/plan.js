// create
export const create =
  'INSERT INTO Plan (start_date, end_date, budget, plan_manager_id, client_id) ' +
  'VALUES (@start_date, @end_date, @budget, @plan_manager_id, @client_id)'
