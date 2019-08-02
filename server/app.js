const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// https://developerhandbook.com/mongodb/connect-mongo-atlas-mongoose/
// https://mongoosejs.com/docs/
const uri =
  "mongodb+srv://turfff:MAXcastelli270@cluster0-96vrp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error:"));
db.once("open", function() {
  console.log("we're connected!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for request on port 4000");
});

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://turfff:<password>@cluster0-96vrp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
