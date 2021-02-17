import React from "react"
import Employee from "./Employee"

export default function Table() {
  return (
    <div className="container-fluid">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <Employee />
        </tbody>
      </table>
    </div>
  )
}
