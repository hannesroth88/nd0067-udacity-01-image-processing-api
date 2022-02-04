import express from "express"
const imagesValidationRoute = express.Router()
import fs from "fs"
import path from "path"
const IMAGEFOLDER = path.resolve("images")

imagesValidationRoute.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const imageName = req.query.imageName as string

  if (!req.query.imageName) {
    res.status(200).end("Endpoint reachable, please provide a imageName, width and height")
    return
  }

  if (!isImageFound(imageName)) {
    res.status(404).end("Image was not found on the server")
    return
  }

  if (req.query.width) {
    const width = parseInt(req.query.width as string)
    if (isNaN(width) || width <= 0) {
      res.status(400).end("provide a width > 0 and of type number")
      return
    }
  } else {
    res.status(400).end("provide a width > 0 and of type number")
    return
  }
  if (req.query.height) {
    const height = parseInt(req.query.height as string)
    if (isNaN(height) || height <= 0) {
      res.status(400).end("provide a height > 0 and of type number")
      return
    }
  } else {
    res.status(400).end("provide a height > 0 and of type number")
    return
  }

  next()
})

function isImageFound(fileName: string): boolean {
  const filePath = path.join(IMAGEFOLDER, `/full/${fileName}.jpg`)
  return fs.existsSync(filePath)
}

export default { imagesValidationRoute, isImageFound }
