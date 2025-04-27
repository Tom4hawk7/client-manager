import { store } from '../store'
import InvoiceManager from './invoice-manager'

import { shell, app } from 'electron'
import path from 'path'

export default class SettingsManager {
  static getAll() {
    const hourly_rate = SettingsManager.getHourlyRate()
    const invoice_id = InvoiceManager.getId().id
    return { invoice_id: invoice_id, hourly_rate: hourly_rate }
  }

  //   static setAll()
  static setAll(data) {
    const { hourly_rate, invoice_id } = data

    InvoiceManager.setId(invoice_id)
    SettingsManager.setHourlyRate(Number(hourly_rate))
  }

  static openTemplate() {
    shell.openPath(path.resolve(app.getPath('userData'), 'Template.docx'))
  }

  static getHourlyRate() {
    return store.get('hourly_rate', 0)
  }

  static setHourlyRate(rate) {
    store.set('hourly_rate', rate)
  }
}
