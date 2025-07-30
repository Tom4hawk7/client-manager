import Database from 'better-sqlite3'
import { app } from 'electron'
import { store } from './store'
import { readFile } from 'fs'
import path from 'path'

const LATEST_USER_VERSION = 2

// create database at specified path
const basePath = path.resolve(app.getPath('userData'), 'client-manager.db')
const db = new Database(basePath)
db.pragma('journal_mode = WAL')

// update schema to match current one
let user_version = db.pragma('user_version', { simple: true })

const resources =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? process.resourcesPath // production
    : path.resolve(process.cwd(), 'resources') // development

// execute script at specified path and increment user_version
while (user_version < LATEST_USER_VERSION) {
  const script = path.join(resources, `scripts/schema-${user_version}.sql`)
  readFile(script, 'utf-8', (err, data) => db.exec(data))

  user_version++
  db.pragma(`user_version = ${user_version}`)
}

export default db
