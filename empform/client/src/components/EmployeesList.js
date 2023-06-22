import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EmployeesList.css";

const Employee = (props) => (
  <tr>
    <td>{props.employee.name.firstName}</td>
    <td>{props.employee.name.middleName}</td>
    <td>{props.employee.name.lastName}</td>
    <td>{props.employee.address}</td>
    <td>{props.employee.contactInfo.email}</td>
    <td>{props.employee.contactInfo.mobileNo}</td>
    <td>
    <Link to={`/edit/${props.employee._id}`} className="edit-link">
      Edit
    </Link>{" "}
      |{" "}
      <button
        onClick={() => {
          props.deleteEmployee(props.employee._id);
        }}
        className="delete-link"
      >
        Delete
      </button>
    </td>
  </tr>
);


export default class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = { employees: [] };
  }

  componentDidMount() {
    axios
      .get("https://empform.onrender.com/employees/")
      .then((response) => {
        this.setState({ employees: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEmployee(id) {
    axios
      .delete("https://empform.onrender.com/employees/delete/" + id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          employees: this.state.employees.filter((el) => el._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  employeeList() {
    return this.state.employees.map((currentEmployee) => {
      return (
        <Employee
          employee={currentEmployee}
          deleteEmployee={this.deleteEmployee}
          key={currentEmployee._id}
        />
      );
    });
  }
  render() {
    return (
      <div className="employees-list">
        <h3>Employees List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.employeeList()}</tbody>
        </table>
      </div>
    );
  }
}
