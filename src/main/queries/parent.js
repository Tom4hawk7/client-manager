// create
export const create =
  'INSERT INTO Parent (name, email, phone, client_id) ' +
  'VALUES (@parent_name, @parent_email, @parent_phone, @client_id)'

// update
export const update =
  'UPDATE Parent ' +
  'SET name = @parent_name, ' +
  'email = @parent_email, ' +
  'phone = @parent_phone ' +
  'WHERE client_id = @id'
