import { useState } from 'react'
import { useRef } from 'react'

// export default function useModal(initialState = false) {
//   const [open, setOpen] = useState(initialState)
//   const toggleOpen = () => setOpen((open) => !open)

//   return [open, toggleOpen]
// }

export default function useModal() {
  const ref = useRef(null)

  function toggleRef() {
    if (ref.current.open) ref.current.close()
    else ref.current.showModal()
  }

  return [ref, toggleRef]
}
