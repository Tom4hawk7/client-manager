import { useState } from 'react'

export default function useModal(initialState = false) {
  const [open, setOpen] = useState(initialState)
  const toggleOpen = () => setOpen((open) => !open)

  return [open, toggleOpen]
}
