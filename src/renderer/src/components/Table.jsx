import { useEffect, useState } from 'react'
import '../assets/css/table.css'

export default function Table() {
  const data = [
    {
      id: 1,
      name: 'Thomas',
      address: '15 John Street',
      contact: '123498012',
      school: 'Big school'
    },
    { id: 2, name: 'Dave', address: 'haymet avenue', contact: '098431298', school: 'Small school' }
  ]

  // Object.keys(data[0]).map((value) => {
  //   console.log(value)
  // })

  // data.map((value) => {
  //   console.log(value)
  // })

  return (
    <table className="hero">
      <thead>
        <tr>
          {Object.keys(data[0]).map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value) => (
              <td>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
