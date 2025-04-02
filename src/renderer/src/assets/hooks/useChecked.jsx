import { useState } from 'react'

// look into implementing a reducer instead because you are about to add another functionality

export default function useChecked(data) {
  const [selected, setSelected] = useState(() => createChecked(data))

  function createChecked(data) {
    return new Map(data.map((data) => [data.id, false]))
  }

  function setChecked(id) {
    const check = selected.get(id)
    setSelected(new Map(selected.set(id, !check)))
  }

  return [selected, setChecked]
}
