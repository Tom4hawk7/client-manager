import { useState } from 'react'
import { useRef } from 'react'

// export default function useModal(initialState = false) {
//   const [open, setOpen] = useState(initialState)
//   const toggleOpen = () => setOpen((open) => !open)

//   return [open, toggleOpen]
// }

export default function useModal() {
  const modalRef = useRef(null)

  function toggleModal() {
    if (modalRef.current.open) modalRef.current.close()
    else modalRef.current.showModal()
  }

  return [modalRef, toggleModal]
}
