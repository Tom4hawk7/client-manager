export const clientViewEntries =
  'SELECT Client.client_id AS id, ' +
  'Client.name AS name, ' +
  'Client.address AS address, ' +
  'Parent.name AS parent, ' +
  'Parent.phone AS contact, ' +
  'Client.school AS school ' +
  'FROM Client ' +
  'JOIN PARENT ' +
  'ON Client.client_id = Parent.client_id'

// Test this sql comman first
