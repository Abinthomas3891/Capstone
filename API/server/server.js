const express = require("express");
const app = express();
const fs = require("fs");
const { ApolloServer, gql, ApolloError } = require("apollo-server-express");
const mongoDB = require("../mongoDb/db");
const UserDB = require("../mongoModel/userDb");
const PostDB = require("../mongoModel/PostsDB");
const jwt = require('jsonwebtoken');
const bcrypt=require("bcryptjs");
const cors = require('cors');
const multer=require('multer');

const enableCors = (process.env.ENABLE_CORS || "true") == "true";

app.use(express.static("./public"));

app.use(cors({ exposedHeaders: 'Authorization' }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// // Handle preflight requests
// app.options("*", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.sendStatus(200);
// });

const typdef_graphql = ``;

// const userDetails = async () => {
//   return UserDB.find();
// };

const postDetails = async () => {
  return PostDB.find();
};

// const storage=multer.diskStorage({
//   destination:(req,file,callback)=>{
//     callback(null,"./Client/public/uploads/");
//   },
//   filename:(req,file,callback)=>{
//     callback(null,file.originalname);
//   }
// })

// const upload=multer({storage:storage})


// const cloudinary=require('cloudinary');

// cloudinary.config({
//   cloud_name: 'dknoyjzjs',
//   api_key: '647744411537987',
//   api_secret: 'tlhmggZ5Tz3PVsniZUOvEgmPS9w'
// });


// const uploadImage= async (parent, {filename})=>{
//   const path= require('path');
//   const mainDir=path.dirname(require.main.filename);
//   filename=`${mainDir}/Client/public/uploads/${filename}`;

//   try{
//     const img= await cloudinary.v2.uploader.upload(filename);
//     return `${img.public_id}.${img.format}`
//   }
//   catch(error){
//     throw new Error(error);
//   }
  
// }

const getPostByNameAndLoc = async (_, { Title, title, Location, location }) => {
  try {

    const posts = await PostDB.find({
      $and: [
        { [Title]: title },
        { [Location]: location },
      ],
    });

    if (posts.length === 0) {
      throw new Error('No posts found with the specified criteria');
    }
    return posts;
  } catch (error) {
    throw new Error('Error while fetching users: ' + error.message);
  }
};




// const getSingleUser = async (_, { id }) => {
//   return UserDB.findById(id);
// };

const getSinglePost = async (_, { id }) => {
  return PostDB.findById(id);
};

// const addUserDetails = async (_, { users }) => {
//   const addUserDetails = new UserDB(users);
//   await addUserDetails.save();
//   return addUserDetails;
// };

const addPostDetails = async (_, { posts }) => {
  const addPostDetails = new PostDB(posts);
  await addPostDetails.save();
  return addPostDetails;
};

// const addPostDetails = async (_, { posts: { image, ...postData } }, { db }) => {
//   if (image) {
//     const { createReadStream, filename, mimetype } = await image;
//     // Process and store the image data in MongoDB
//     const imageData = createReadStream().pipe(/* Process and store image in MongoDB */);
//     postData.image = "imageurl";  // Set the image URL or data here
//   }

//   const result = await db.collection('posts').insertOne(postData);
//   //return { _id: result.insertedId, ...postData };


//   const addPostDetails = new PostDB(posts);
//   await addPostDetails.save();
//   return addPostDetails;
// };


// const updateUser = async (_, { id, user }) => {
//   const newUser = await UserDB.findByIdAndUpdate(id, user, {
//     new: true,
//   });
//   return newUser;
// };
// const updatePost = async (_, { id, post }) => {
//   const newPost = await PostDB.findByIdAndUpdate(id, post, {
//     new: true,
//   });
//   return newPost;
// };


const registerUser = async (_, { registerInput:{ username,email,Phone,Password }}) => {

  console.log('inside reg',username,email,Phone,Password);

  const oldUser= await UserDB.findOne({email});

  if(oldUser){
    throw new ApolloError('user already exists with the email : '+ email , 'USER_EXISTS')
  }

  var encryptPwd= await bcrypt.hash(Password,10);

  const token = jwt.sign(
    {
      email
    },
    "UNSAFE_STRING",
    {
      expiresIn:"1h"
    }
  );

  const newUser = new UserDB({
    username: username,
    email: email,
    Phone: Phone,
    Password: encryptPwd,
    token: token,
  });

 

  

  newUser.token= token;

  const res=await newUser.save();

  return {
    id: res.id,
    ...res._doc
  }
};


const loginUser = async (_, { loginInput: { email, Password } }) => {
  try {
    const user = await UserDB.findOne({ email });

    if (!user) {
      throw new ApolloError("User not found", "USER_NOT_FOUND");
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      throw new ApolloError("Incorrect password", "INCORRECT_PASSWORD");
    }

    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      "UNSAFE_STRING",
      {
        expiresIn: "1h",
      }
    );

    user.token = token;

    await user.save();

    return {
      id: user.id,
      ...user._doc,
    };
  } catch (error) {
    throw new ApolloError("Error during login: " + error.message, "LOGIN_ERROR");
  }
};


// const login= async (_, { Email, Password }) => {
//   console.log("server login")
//   // Find the user in the database
//   const user = await UserDB.findOne({ Email });

//   if (!user) {
//     throw new Error('Invalid email or password');
//   }
//   if(Password===user.Password){
//     throw new Error('Invalid email or password');
//   }
//   return user;
// }


// const employeeDelete = async (_, { id }) => {
//   const empDelete = await EmployeeDB.findByIdAndDelete(id);
//   return empDelete;
// };

const resolvers = {
  Query: {
    // userDetails: userDetails,
    // getSingleUser: getSingleUser,
    postDetails: postDetails,
    getSinglePost: getSinglePost,
    // getPostByNameAndLoc :getPostByNameAndLoc,
  },
  Mutation: {
    // addUserDetails: addUserDetails,
    addPostDetails: addPostDetails,
    // employeeDelete: employeeDelete,
    // updateUser: updateUser,
    // updatePost: updatePost,
    registerUser:registerUser,
    loginUser:loginUser,
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
