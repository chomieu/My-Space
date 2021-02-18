import React, { Component } from "react"
import SearchBox from "./SearchBox"
import TableColumn from "./TableColumn"
import Employee from "./Employee"
import API from "../utils/API";

export default class Table extends Component {
  state = {
    search: "",
    employees: []
  }

  componentDidMount() {
    this.getEmployees()
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  getEmployees = () => {
    API.getRandom().then(res => {
      this.setState({ employees: res.data.results })
      this.sortEmployees()
    }).catch(err => { console.log(err) })
  }

  sortEmployees = () => {
    const sorted = this.state.employees.sort((a, b) => {
      return a.name.first.toLowerCase() < b.name.first.toLowerCase() ? -1 : 1
    })
    this.setState({ employees: sorted })
  }

  reverseEmployees = () => {
    const reversed = this.state.employees.reverse()
    this.setState({ employees: reversed })
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBox handleInputChange={this.handleInputChange} search={this.state.search} />
        <table className="table table-striped">
          <thead>
            <TableColumn reverseEmployees={this.reverseEmployees} />
          </thead>
          <tbody>
            {this.state.employees.filter(x =>
              (`${x.name.first} ${x.name.last}`).toLowerCase().includes(this.state.search.toLowerCase()))
              .map(person => <Employee key={this.state.employees.indexOf(person)} data={person} />
              )}
          </tbody>
        </table>
      </div>
    )
  }
}
