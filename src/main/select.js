export const clientViewEntries =
  'SELECT Client.client_id AS id, ' +
  'Client.name AS name, ' +
  'Client.address AS address, ' +
  'Parent.name AS parent, ' +
  'Parent.phone AS contact, ' +
  'Client.school AS school ' +
  'FROM Client ' +
  'JOIN Parent ' +
  'ON Client.client_id = Parent.client_id'

export const clientFormEntries =
  'SELECT Client.client_id, ' +
  'Client.name, ' +
  'Client.dob, ' +
  'Client.school, ' +
  'Client.address, ' +
  'Client.participant_number, ' +
  'Parent.name AS parent, ' +
  'Parent.email AS email, ' +
  'Parent.phone ' +
  'FROM Client ' +
  'JOIN Parent ' +
  'ON Client.client_id = Parent.client_id ' +
  'WHERE Client.client_id = ?'

// Test this sql comman first
