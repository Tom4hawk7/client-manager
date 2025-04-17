import styles from './SearchBar.module.css'

export default function SearchBar({ onChange }) {
  return <input className={styles.searchbar} onChange={onChange} type="search" />
}

// function filterData(e) {
//   setFilter(
//     data.filter((row) => {
//       const value = row[prop].toLowerCase()
//       const search = e.target.value.toLowerCase()

//       return value.includes(search)
//     })
//   )
// }

// export default function SearchBar({ data, setFilter, prop }) {

//   return <input className={styles.searchbar} onChange={filterData} type="search" />
// }
