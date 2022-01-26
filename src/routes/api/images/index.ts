import express from "express";
const imagesRoute = express.Router();
import imageLogic from "./../../../components/imageLogic";

imagesRoute.get("/", (req, res) => {
  res.send("images route");
});

imagesRoute.get("/:imageName", async (req, res) => {
  const imageName = req.params.imageName as unknown as string;
  console.log(imageName);

  const image = await imageLogic.run(imageName, 100, 100);
  res.send(image);
});

export default imagesRoute;
