import express from "express"
import imagesRoute from "./images"
const apiRoute = express.Router()

apiRoute.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("imagesRoute")
})

apiRoute.use("/images", imagesRoute)

export default apiRoute
