// libraries that generate document and load file in memory
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'

// const Docxtemplater = require('docxtemplater')
// const PizZip = require('pizzip')

// Builtin file system utilities
import fs from 'fs'
import path from 'path'
// import { ipcMain } from 'electron'

// const fs = require('fs')
// const path = require('path')

// // Load the docx file as binary content
// const content = fs.readFileSync(path.resolve(__dirname, 'Template.docx'), 'binary')

// // Unzip the content of the file
// const zip = new PizZip(content)

// // Parse the template
// const doc = new Docxtemplater(zip, {
//   paragraphLoop: true,
//   linebreaks: true
// })

// // Parse the values
// doc.render(testData)

// // Get the document as a zip (docx are zipped files)
// const buf = doc.getZip().generate({
//   type: 'nodebuffer',
//   compression: 'DEFLATE'
// })

// // write the node.js buffer to a file
// fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf)

// export function createDoc(outputDir, outputName, data) {
//   console.log(process.cwd())
// }

export function createDoc(outputDir, outputName, data) {
  // Load the docx file as binary content and unzip it
  const content = fs.readFileSync(
    path.resolve(process.cwd(), 'resources', 'Template.docx'),
    'binary'
  )
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

  const test = path.resolve(outputDir, `${outputName}.docx`)

  // write the node.js buffer to a file
  fs.writeFileSync(path.resolve(outputDir, `${outputName}.docx`), buf)
}
