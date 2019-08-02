const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);

const app = express();
app.listen(4000, () => {
  console.log("now listening for request on port 4000");
});
