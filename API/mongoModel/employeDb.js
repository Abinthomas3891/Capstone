const mongoose=require("mongoose");

const employeeDB = mongoose.Schema({
    FirstName: {type: String,},
    LastName: {type: String,},
    Age: {type: Number,},
    DateOfJoining: {type: Date,},
    Title: {type: String,},
    Department: {type: String,},
    EmployeeType: {type: String,},
    CurrentStatus: {type: Boolean,},
  });
  
  const EmployeeDB = mongoose.model("employeeDB", employeeDB);
  module.exports = EmployeeDB;
  