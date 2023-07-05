const express = require("express");
const app = express();
const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoDB = require("../mongoDb/db");
const UserDB = require("../mongoModel/userDb");
const PostDB = require("../mongoModel/PostsDB");
const enableCors = (process.env.ENABLE_CORS || "true") == "true";

app.use(express.static("./public"));

const typdef_graphql = ``;

const userDetails = async () => {
  return UserDB.find();
};

const postDetails = async () => {
  return PostDB.find();
};

const getSingleUser = async (_, { id }) => {
  return UserDB.findById(id);
};

const getSinglePost = async (_, { id }) => {
  return PostDB.findById(id);
};

const addUserDetails = async (_, { users }) => {
  const addUserDetails = new UserDB(users);
  await addUserDetails.save();
  return addUserDetails;
};

const addPostDetails = async (_, { posts }) => {
  const addPostDetails = new PostDB(posts);
  await addPostDetails.save();
  return addPostDetails;
};


const updateUser = async (_, { id, user }) => {
  const newUser = await UserDB.findByIdAndUpdate(id, user, {
    new: true,
  });
  return newUser;
};
const updatePost = async (_, { id, post }) => {
  const newPost = await PostDB.findByIdAndUpdate(id, post, {
    new: true,
  });
  return newPost;
};

// const employeeDelete = async (_, { id }) => {
//   const empDelete = await EmployeeDB.findByIdAndDelete(id);
//   return empDelete;
// };

const resolvers = {
  Query: {
    userDetails: userDetails,
    getSingleUser: getSingleUser,
    postDetails: postDetails,
    getSinglePost: getSinglePost,
  },
  Mutation: {
    addUserDetails: addUserDetails,
    addPostDetails: addPostDetails,
    // employeeDelete: employeeDelete,
    updateUser: updateUser,
    updatePost: updatePost,
  },
};

const typeDefsUser = fs.readFileSync("./server/qlschema", "utf-8");
const typeDefsPost = fs.readFileSync("./server/qlschemaPost", "utf-8");

const mergedTypeDefs = gql`
${typeDefsUser}
${typeDefsPost}
`;

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers,
});

server.start().then((res) => {
  mongoDB();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(4500, () => {
    console.log("http://localhost:4500" + server.graphqlPath);
  });
});
