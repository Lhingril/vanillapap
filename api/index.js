const express = require("express");
const app = express();

//Importierung der Route
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://prianka:prianka@cluster0.dxgnm56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

mongoose.connect('mongodb+srv://prianka:prianka@cluster0.dxgnm56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const storage = multer.diskStorage({
  destination:(req, file,cb) => {
    cb(null,"images")
  },filename:(req,file,cb) => {
    cb(null,req.body.name)
  },
});

const upload = multer ({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res) =>{
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen("4000", () => {
  console.log("Backend is running.");
});

