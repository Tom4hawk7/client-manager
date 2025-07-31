import { store } from '../store'
import InvoiceManager from './invoice-manager'

import { shell, app } from 'electron'
import path from 'path'

export default class SettingsManager {
  static getAll() {
    // const session_rate = Number(store.get('session_rate', 193.99))
    // const travel_rate = Number(store.get('travel_rate', 97))
    const invoice_id = InvoiceManager.getId().id

    return { invoice_id: invoice_id }
    // return { invoice_id: invoice_id, session_rate: session_rate, travel_rate: travel_rate }
  }

  // static setAll()
  static setAll(data) {
    const { invoice_id } = data
    // const { session_rate, travel_rate, invoice_id } = data

    InvoiceManager.setId(invoice_id)
    // store.set('session_rate', Number(session_rate))
    // store.set('travel_rate', Number(travel_rate))
  }

  static openTemplate() {
    shell.openPath(path.resolve(app.getPath('userData'), 'Template.docx'))
  }
}
