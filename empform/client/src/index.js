import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import EmployeesList from "./components/EmployeesList";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";

ReactDOM.render(
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Employee Data Collection
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Employee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <br />
      <Routes>
        <Route exact path="/" element={<EmployeesList />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/edit/:id" component={<EditEmployee />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById("root")
);
