import { useState } from 'react'

export default function useFilter(initialState, key) {
  const [filter, setFilter] = useState(initialState)

  function filterData(e) {
    setFilter(
      initialState.filter((data) => {
        const value = data[key].toLowerCase()
        const search = e.target.value.toLowerCase()

        return value.includes(search)
      })
    )
  }
  return [filter, filterData]
}
