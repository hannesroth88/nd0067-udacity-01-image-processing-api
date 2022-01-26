import express from "express";
import imagesRoute from "./images";
const apiRoute = express.Router();

apiRoute.get("/", (req, res) => {
  res.send("api route");
});

apiRoute.use("/images", imagesRoute);

export default apiRoute;
