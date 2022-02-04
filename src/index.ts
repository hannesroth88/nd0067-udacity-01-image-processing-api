import express = require("express")
import apiRoute from "./routes/api"

const app = express()

const port = 8080 // default port to listen

app.use("/api", apiRoute)

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("Welcome to Image Processing API")
})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
