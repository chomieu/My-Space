import React from "react"

export default function Employee(props) {
  return (
    <tr scope="row">
      <td><img src={props.data.picture.thumbnail} /></td>
      <td className="align-middle">{props.data.name.first} {props.data.name.last}</td>
      <td className="align-middle">{props.data.phone}</td>
      <td className="align-middle">{props.data.email}</td>
      <td className="align-middle">{props.data.dob.date.toString().substring(0, 10)}</td>
    </tr>
  )
}
