import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useCallback, useEffect, useState, useMemo } from 'react'
import EditButton from '../components/EditButton/EditButton'

ModuleRegistry.registerModules([AllCommunityModule])

const colDefs = [
  { headerName: 'Name', field: 'client_name' },
  { headerName: 'Parent', field: 'parent_name' },
  { headerName: 'Address', field: 'client_address' },
  { headerName: 'Contact', field: 'parent_phone' },
  { headerName: 'School', field: 'client_school' },
  { field: 'edit', cellRenderer: EditButton }
]

export default function ClientForm() {
  const [rowData, setRowData] = useState({})

  useEffect(() => {
    const data = async () => window.client.getTable()
    data().then(setRowData)
  }, [])

  const getRowId = useCallback((params) => String(params.data.id), [])

  const defaultColDef = {
    editable: false,
    flex: 1,
    minWidth: 100,
    filter: true
  }

  const rowSelection = useMemo(() => {
    return {
      mode: 'multiRow',
      checkboxes: true,
      headerCheckbox: true,
      enableClickSelection: true
    }
  }, [])

  //   const rowSelection = () => {
  //     return {
  //       mode: 'multiRow'
  //     }
  //   }

  return (
    <AgGridReact
      theme={themeQuartz}
      rowData={rowData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
      getRowId={getRowId}
      rowSelection={rowSelection}
    />
  )
}
