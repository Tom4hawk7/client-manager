// create
export const create =
  'INSERT INTO Client (name, dob, address, school, participant_number) ' +
  'VALUES (@client_name, @dob, @address, @school, @participant_number)'

// read
export const view =
  'SELECT Client.client_id AS id, ' +
  'Client.name AS name, ' +
  'Client.address AS address, ' +
  'Parent.name AS parent, ' +
  'Parent.phone AS contact, ' +
  'Client.school AS school ' +
  'FROM Client ' +
  'JOIN Parent ' +
  'ON Client.client_id = Parent.client_id'

export const form =
  'SELECT Client.client_id AS id, ' +
  'Client.name AS client_name, ' +
  'Client.dob, ' +
  'Client.school, ' +
  'Client.address, ' +
  'Client.participant_number, ' +
  'Parent.name AS parent_name, ' +
  'Parent.email AS parent_email, ' +
  'Parent.phone ' +
  'FROM Client ' +
  'JOIN Parent ' +
  'ON Client.client_id = Parent.client_id ' +
  'WHERE Client.client_id = ?'

// update
export const update =
  'UPDATE Client ' +
  'SET name = @client_name, ' +
  'dob = @dob, ' +
  'school = @school, ' +
  'address = @address, ' +
  'participant_number = @participant_number ' +
  'WHERE client_id = @id'

// delete
export const remove = 'DELETE FROM Client ' + 'WHERE client_id = ?'
