import React from 'react'

export default function TableColumn(props) {
  return (
    <tr>
      <th scope="col">Image</th>
      <th scope="col" onClick={props.reverseEmployees}>Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  )
}
