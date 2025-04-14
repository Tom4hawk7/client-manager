import { db } from '../database'

// create

// read
export function get(e, client_id) {
  const data = db
    .prepare(
      `SELECT 
	  Plan.id AS plan_id,
	  Plan.start_date AS plan_start_date,
	  Plan.end_date AS plan_end_date,
	  Plan.budget AS plan_budget,
	  PlanManager.id AS plan_manager_id,
	  PlanManager.name AS plan_manager_name,
	  PlanManager.email AS plan_manager_email
  FROM Plan
  INNER JOIN PlanManager ON Plan.id = PlanManager.plan_id
  WHERE Plan.client_id = ?`
    )
    .get(client_id)

  return data
}

// update

// delete
