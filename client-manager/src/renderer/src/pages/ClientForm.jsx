import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'

ModuleRegistry.registerModules([AllCommunityModule])

export default function ClientForm() {
  const [rowData, setRowData] = useState([
    {
      name: 'Tom',
      parent: 'Dave',
      address: '56 Oxford Road',
      //   contact: '058219',
      school: 'Big Boy School',
      somethingelse: {
        contact: '058219'
      }
    },
    {
      name: 'Alex',
      parent: 'Sue',
      address: '32 Joyce Road',
      contact: '043215',
      school: 'Small Boy School',
      somethingelse: 'reter'
    },
    {
      name: 'Sunny',
      parent: 'Jarod',
      address: '25 Turnt Road',
      contact: '076123',
      school: 'Kindergarten',
      somethingelse: 'beef'
    }
  ])

  const [colDefs, setColDefs] = useState([
    { field: 'name' },
    { field: 'parent' },
    { field: 'address' },
    { field: 'contact' },
    { field: 'school' }
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
