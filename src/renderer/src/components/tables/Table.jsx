import { useEffect, useState } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../../assets/css/table.css'

export function Table({ children }) {
  return (
    <div className="hero">
      <table className="card">{children}</table>
    </div>
  )
}

// head
export function THead({ children }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}

// i think css styles make the first letter upercase for the viewable text
export function Header({ header }) {
  return <th key={header}>{header}</th>
}

// body
export function TBody({ children }) {
  return <tbody>{children}</tbody>
}

export function DataRow({ children, key }) {
  return (
    <tr className="data-row" key={key}>
      {children}
    </tr>
  )
}

// like the other one, see if you can make it a child instead
export function DataCell({ value }) {
  return <td key={value}>{value}</td>
}

export function TableActions({ editLink, clientData, handleDelete }) {
  return (
    <td key={'actions'}>
      {/* make sure to change clientData to the actual object once you've got it working */}
      <Link to={editLink} state={{ id: clientData }}>
        <MdEdit className="icon table-icon" />
      </Link>
      <MdDelete onClick={handleDelete} className="icon bin table-icon" />
    </td>
  )
}
