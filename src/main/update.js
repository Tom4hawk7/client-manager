export const updateClientInfo =
  'UPDATE Client ' +
  'SET name = @client_name, ' +
  'dob = @dob, ' +
  'school = @school, ' +
  'address = @address, ' +
  'participant_number = @participant_number ' +
  'WHERE client_id = @id'

export const updateParentInfo =
  'UPDATE Parent ' +
  'SET name = @parent_name, ' +
  'email = @parent_email, ' +
  'phone = @parent_phone ' +
  'WHERE client_id = @id'
