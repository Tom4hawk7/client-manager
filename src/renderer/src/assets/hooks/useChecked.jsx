import { useState } from 'react'

export default function useChecked(data) {
  const [selected, setSelected] = useState(() => {
    if (Array.isArray(data)) {
      return new Map(data.map((data) => [data.id, false]))
    }
  })

  return new Checked(selected, setSelected)
}

class Checked {
  constructor(selected, setSelected) {
    this.selected = selected
    this.setSelected = setSelected
  }

  getAll() {
    return this.selected
  }

  get(id) {
    return this.selected.get(id)
  }

  toggleAll(event) {
    this.setSelected(
      new Map(
        this.selected.keys().map((key) => {
          return [key, event.target.checked]
        })
      )
    )
  }

  toggle(id) {
    const check = this.get(id)
    this.setSelected(new Map(this.selected.set(id, !check)))
  }
}
