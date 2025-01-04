// create
export const create = `
  INSERT INTO PlanManager (name, email, plan_id) 
  VALUES (@plan_manager_name, @plan_manager_email, @plan_id)
  `

// update
export const update = `
  UPDATE PlanManager
  SET
    name = @plan_manager_name,
    email = @plan_manager_email
  WHERE PlanManager.plan_id = @plan_id
  `
