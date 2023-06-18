import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeesList from "./components/EmployeesList";
import EditEmployee from "./components/EditEmployee";
import CreateEmployee from "./components/CreateEmployee";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Employee Data Collection
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Employees
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Employee
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={EmployeesList} />
          <Route path="/edit" element={EditEmployee} />
          <Route path="/create" component={CreateEmployee} />
        </div>
      </Router>
    );
  }
}

export default App;
