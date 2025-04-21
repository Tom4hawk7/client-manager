import { useEffect, useState } from 'react'

// a reducer would probably be better here

export default function useChecked(data) {
  const [selected, setSelected] = useState(() => {
    if (Array.isArray(data)) {
      return new Map(data.map((data) => [data.id, false]))
    }
  })

  useEffect(() => {
    setSelected(new Map(data.map((data) => [data.id, false])))
  }, [data])

  return new Checked(selected, setSelected)
}

class Checked {
  constructor(selected, setSelected) {
    this.selected = selected
    this.setSelected = setSelected
  }

  update(data) {
    if (Array.isArray(data)) {
      const test = new Map(data.map((data) => [data.id, false]))
      this.setSelected(test)
    }
  }

  check() {
    let c = false

    for (const value of this.selected.values()) {
      if (value === true) {
        c = true
        break
      }
    }

    return c
  }

  // ifSelected() {
  //   for (const value of this.selected.values())
  // }

  getAll() {
    return this.selected
  }

  forAll(func) {
    this.selected.forEach((value, key) => {
      if (value === true) {
        func(key)
        // might cause issues but will see
        const newSelection = new Map(this.selected)
        newSelection.delete(key)

        this.setSelected(this.selected)
      }
    })
  }

  get(id) {
    try {
      return this.selected.get(id)
    } catch {
      return undefined
    }
  }

  toggleAll(event) {
    console.log('Selection currently: ', this.selected)

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
