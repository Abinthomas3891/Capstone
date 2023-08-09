const express = require("express");
const app = express();
const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoDB = require("../mongoDb/db");
const UserDB = require("../mongoModel/userDb");
const PostDB = require("../mongoModel/PostsDB");
const enableCors = (process.env.ENABLE_CORS || "true") == "true";

app.use(express.static("./public"));

// Your resolvers
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



// Updated resolver for queryByUserId
const queryByUserId = async (_, { userId }) => {
  try {
    const posts = await PostDB.find({ createdBy: userId });
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching posts by user ID');
  }
};
// Define resolvers
const resolvers = {
  Query: {
    userDetails: userDetails,
    getSingleUser: getSingleUser,
    postDetails: postDetails,
    getSinglePost: getSinglePost,
    queryByUserId: queryByUserId, // Added queryByUserId resolver
  },
  Mutation: {
    addUserDetails: addUserDetails,
    addPostDetails: addPostDetails,
    updateUser: updateUser,
    updatePost: updatePost,
  },
};

// Read schema files
const typeDefsUser = fs.readFileSync("./server/qlschema", "utf-8");
const typeDefsPost = fs.readFileSync("./server/qlschemaPost", "utf-8");

// Merge type definitions
const mergedTypeDefs = gql`
  ${typeDefsUser}
  ${typeDefsPost}
`;

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers,
});

// Start server
server.start().then(() => {
  mongoDB();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(4500, () => {
    console.log("Server is running on http://localhost:4500" + server.graphqlPath);
  });
});
