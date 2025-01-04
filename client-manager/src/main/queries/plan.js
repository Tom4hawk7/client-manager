// // create
// export const create = 'INSERT INTO PlanManager (name, email) VALUES (@name, @email)'

// // read
// export const read = 'SELECT plan_manager_id AS id, name, email FROM PlanManager'

// // update
// export const update =
//   'UPDATE PlanManager ' + 'SET name = @name, ' + 'email = @email ' + 'WHERE plan_manager_id = @id'

// // delete
// export const remove = 'DELETE FROM PlanManager WHERE plan_manager_id = ?'

// create
export const create = `
    INSERT INTO PLAN (start_date, end_date, budget, client_id)
    VALUES(@plan_start_date, @plan_end_date, @plan_budget, @id)
    `

// update
export const update = `
    UPDATE Plan
    SET
        start_date = @plan_start_date,
        end_date = @plan_end_date,
        budget = @plan_budget
    WHERE client_id = @id
    RETURNING plan_id
    `
