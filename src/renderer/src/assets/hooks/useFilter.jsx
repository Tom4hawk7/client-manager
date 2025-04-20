import { useSearchParams } from 'react-router'

export default function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  function setFilter(key, value) {
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

  return [searchParams, setFilter]
}
