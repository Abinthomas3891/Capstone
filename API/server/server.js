const express = require("express");
const app = express();
const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");
const mongoDB = require("../mongoDb/db");
const EmployeeDB = require("../mongoModel/employeDb");
const enableCors = (process.env.ENABLE_CORS || "true") == "true";

app.use(express.static("./public"));

const typdef_graphql = ``;

const employeeDetails = async () => {
  return EmployeeDB.find();
};

const getSingleEmployee = async (_, { id }) => {
  return EmployeeDB.findById(id);
};

const addEmployeeDetails = async (_, { employees }) => {
  const addEmployeeDetail = new EmployeeDB(employees);
  await addEmployeeDetail.save();
  return addEmployeeDetail;
};

const updateEmployee = async (_, { id, employee }) => {
  const newEmp = await EmployeeDB.findByIdAndUpdate(id, employee, {
    new: true,
  });
  return newEmp;
};

const employeeDelete = async (_, { id }) => {
  const empDelete = await EmployeeDB.findByIdAndDelete(id);
  return empDelete;
};

const resolvers = {
  Query: {
    employeeDetails: employeeDetails,
    getSingleEmployee: getSingleEmployee,
  },
  Mutation: {
    addEmployeeDetails: addEmployeeDetails,
    employeeDelete: employeeDelete,
    updateEmployee: updateEmployee,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/qlschema", "utf-8"),
  resolvers,
});

server.start().then((res) => {
  mongoDB();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(4500, () => {
    console.log("http://localhost:4500" + server.graphqlPath);
  });
});
