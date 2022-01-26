import express = require("express");

const app = express();

const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// define a route handler for the default home page
app.get("/api/images", (req, res) => {
  console.log("JSON.stringify(req)");
  console.log(JSON.stringify(req.query));
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
