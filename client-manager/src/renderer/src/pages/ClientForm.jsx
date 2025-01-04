import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'

ModuleRegistry.registerModules([AllCommunityModule])

export default function ClientForm() {
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false }
  ])

  const [colDefs, setColDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' }
  ])

  const defaultColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true
  }

  return (
    <AgGridReact
      theme={themeQuartz}
      rowData={rowData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
    />
  )
}
