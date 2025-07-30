// libraries that generate document and load file in memory
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'

// Builtin file system utilities
import fs from 'fs'
import path from 'path'
import { app } from 'electron'

export function createDoc(outputDir, outputName, data) {
  // Load the docx file as binary content and unzip it
  const content = fs.readFileSync(path.resolve(app.getPath('userData'), 'Template.docx'), 'binary')

  const zip = new PizZip(content)

  // Parse the template
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true
  })

  // Parse the values
  doc.render(data)

  // Get the document as a zip (docx are zipped files)
  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE'
  })

  // write the node.js buffer to a file
  fs.writeFileSync(path.resolve(outputDir, `${outputName}.docx`), buf)
}
