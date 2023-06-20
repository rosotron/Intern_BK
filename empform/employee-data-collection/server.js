const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri =
  "mongodb+srv://root:root@employee.jfrd5j6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  address: { type: String, required: true },
  contactInfo: {
    email: { type: String, required: true },
    mobileNo: { type: String, required: true },
  },
  qualifications: [
    {
      institutionName: { type: String, required: true },
      board: { type: String },
      cgpa: { type: Number },
      outOfCgpa: { type: Number },
      startDate: { type: Date },
      endDate: { type: Date },
    },
  ],
});

const Employee = mongoose.model("Employee", employeeSchema);

app.get("/employees", (req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;
  Employee.findById(employeeId)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json("Error: " + err));
});


app.post("/employees/add", (req, res) => {
  const newEmployee = new Employee(req.body);

  newEmployee
    .save()
    .then(() => res.json("Employee added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.put("/employees/update/:id", (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => {
      employee.name = req.body.name;
      employee.address = req.body.address;
      employee.contactInfo = req.body.contactInfo;
      employee.qualifications = req.body.qualifications;

      employee
        .save()
        .then(() => res.json("Employee updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

app.delete("/employees/delete/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json("Employee deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
