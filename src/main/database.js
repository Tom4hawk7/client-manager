import Database from 'better-sqlite3'
const db = new Database('client-manager.db')

// Need to state foreign keys here
// const createClient = `
//     CREATE TABLE Client
//     name,
//     dob,
//     participantNumber,
//     addressId,
//     parentId,
//     planId,`
