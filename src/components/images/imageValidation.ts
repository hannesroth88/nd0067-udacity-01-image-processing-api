import express from "express";
import { nextTick } from "process";
var imagesValidationRoute = express.Router();
const fs = require("fs");
const path = require("path");
const appDir = path.dirname(require?.main?.filename);
const IMAGEFOLDER = path.join(appDir, "..", "/images");

imagesValidationRoute.get("/", async (req, res, next) => {
  console.log("Validate Image");
  const imageName = req.query.imageName as string;

  if (!req.query.imageName) {
    res.status(200).end("Endpoint reachable, please provide a imageName, width and height");
    return;
  }

  if (!isImageFound(imageName)) {
    res.status(400).end("Image was not found on the server");
    return;
  }

  if (req.query.width) {
    let width = parseInt(req.query.width as string);
    if (isNaN(width) || width <= 0) {
      res.status(400).end("provide a width >= 0 and of type number");
      return;
    }
  }

  if (req.query.height) {
    let height = parseInt(req.query.height as string);
    if (isNaN(height) || height <= 0) {
      res.status(400).end("provide a height > 0 and of type number");
      return;
    }
  }

  next();
});

function isImageFound(fileName: string): boolean {
  const filePath = path.join(IMAGEFOLDER, `/full/${fileName}.jpg`);
  return fs.existsSync(filePath);
}

export default { imagesValidationRoute, isImageFound };
