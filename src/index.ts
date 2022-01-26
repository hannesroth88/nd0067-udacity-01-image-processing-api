import express = require("express");
import apiRoute from "./routes/api";

const app = express();

const port = 8080; // default port to listen

app.use("/api", apiRoute);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
