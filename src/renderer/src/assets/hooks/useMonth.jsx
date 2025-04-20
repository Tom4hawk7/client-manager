import { useState } from 'react'
import currentDate from '../functions/currentDate'

export default function useMonth() {
  const [month, setMonth] = useState(currentDate)

  return [month, setMonth]
}
