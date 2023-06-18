import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
//import "./EditEmployee.css";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    this.onChangeQualifications = this.onChangeQualifications.bind(this);
    this.addQualification = this.addQualification.bind(this);
    this.removeQualification = this.removeQualification.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
      address: "",
      contactInfo: {
        email: "",
        mobileNo: "",
      },
      qualifications: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        const employee = res.data;
        this.setState({
          name: employee.name,
          address: employee.address,
          contactInfo: employee.contactInfo,
          qualifications: employee.qualifications,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeName(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      name: {
        ...prevState.name,
        [name]: value,
      },
    }));
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeEmail(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      contactInfo: {
        ...prevState.contactInfo,
        [name]: value,
      },
    }));
  }

  onChangeMobileNo(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      contactInfo: {
        ...prevState.contactInfo,
        [name]: value,
      },
    }));
  }

  onChangeQualifications(e, index) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const qualifications = [...prevState.qualifications];
      qualifications[index][name] = value;
      return { qualifications };
    });
  }

  addQualification() {
    this.setState((prevState) => ({
      qualifications: [
        ...prevState.qualifications,
        {
          institutionName: "",
          board: "",
          cgpa: "",
          outOfCgpa: "",
          startDate: null,
          endDate: null,
        },
      ],
    }));
  }

  removeQualification(index) {
    this.setState((prevState) => {
      const qualifications = [...prevState.qualifications];
      qualifications.splice(index, 1);
      return { qualifications };
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { id } = this.props.match.params;

    const employee = {
      name: this.state.name,
      address: this.state.address,
      contactInfo: this.state.contactInfo,
      qualifications: this.state.qualifications,
    };

    console.log(employee);

    axios.put(`http://localhost:5000/employees/update/${id}`, employee)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="edit-employee">
        <h3>Edit Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={this.state.name.firstName}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              className="form-control"
              value={this.state.name.middleName}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={this.state.name.lastName}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={this.state.contactInfo.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNo">Mobile No:</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              className="form-control"
              value={this.state.contactInfo.mobileNo}
              onChange={this.onChangeMobileNo}
            />
          </div>
          <div className="form-group">
            <label>Qualifications:</label>
            {this.state.qualifications.map((qualification, index) => (
              <div key={index} className="qualification">
                <label htmlFor="institutionName">Institution Name:</label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  className="form-control"
                  value={qualification.institutionName}
                  onChange={(e) => this.onChangeQualifications(e, index)}
                />
                <label htmlFor="board">Board:</label>
                <input
                  type="text"
                  id="board"
                  name="board"
                  className="form-control"
                  value={qualification.board}
                  onChange={(e) => this.onChangeQualifications(e, index)}
                />
                <label htmlFor="cgpa">CGPA:</label>
                <input
                  type="text"
                  id="cgpa"
                  name="cgpa"
                  className="form-control"
                  value={qualification.cgpa}
                  onChange={(e) => this.onChangeQualifications(e, index)}
                />
                <label htmlFor="outOfCgpa">Out of:</label>
                <input
                  type="text"
                  id="outOfCgpa"
                  name="outOfCgpa"
                  className="form-control"
                  value={qualification.outOfCgpa}
                  onChange={(e) => this.onChangeQualifications(e, index)}
                />
                <label>Starting Date:</label>
                <DatePicker
                  selected={qualification.startDate}
                  onChange={(date) =>
                    this.onChangeQualifications(
                      {
                        target: {
                          name: "startDate",
                          value: date,
                        },
                      },
                      index
                    )
                  }
                  className="form-control"
                />
                <label>End Date:</label>
                <DatePicker
                  selected={qualification.endDate}
                  onChange={(date) =>
                    this.onChangeQualifications(
                      {
                        target: {
                          name: "endDate",
                          value: date,
                        },
                      },
                      index
                    )
                  }
                  className="form-control"
                />
                <button
                  type="button"
                  className="remove-qualification"
                  onClick={() => this.removeQualification(index)}
                >
                  Remove Qualification
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="add-qualification"
            onClick={this.addQualification}
          >
            Add Qualification
          </button>
          <div className="form-group">
            <input
              type="submit"
              value="Update Employee"
              className="submit-btn"
            />
          </div>
        </form>
      </div>
    );
  }  
}
