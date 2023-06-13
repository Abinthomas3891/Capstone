const express = require("express");
const app = express();
const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");
const mongoDB = require("../mongoDb/db");
const UserDB = require("../mongoModel/userDb");
const enableCors = (process.env.ENABLE_CORS || "true") == "true";

app.use(express.static("./public"));

const typdef_graphql = ``;

const userDetails = async () => {
  return UserDB.find();
};

const getSingleUser = async (_, { id }) => {
  return UserDB.findById(id);
};

const addUserDetails = async (_, { users }) => {
  const addUserDetails = new UserDB(users);
  await addUserDetails.save();
  return addUserDetails;
};

const updateUser = async (_, { id, user }) => {
  const newUser = await UserDB.findByIdAndUpdate(id, user, {
    new: true,
  });
  return newUser;
};

// const employeeDelete = async (_, { id }) => {
//   const empDelete = await EmployeeDB.findByIdAndDelete(id);
//   return empDelete;
// };

const resolvers = {
  Query: {
    userDetails: userDetails,
    getSingleUser: getSingleUser,
  },
  Mutation: {
    addUserDetails: addUserDetails,
    // employeeDelete: employeeDelete,
    updateUser: updateUser,
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
