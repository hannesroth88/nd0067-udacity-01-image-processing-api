import express from "express";
const imagesRoute = express.Router();
import imageLogic from "../../../components/images/imageLogic";
import imageValidation from "../../../components/images/imageValidation";

imagesRoute.get(
  "/",
  imageValidation.imagesValidationRoute,
  async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    try {
      const imageName = req.query.imageName as string;
      const width = parseInt(req.query.width as string);
      const height = parseInt(req.query.height as string);

      const imageOut = await imageLogic.getImageCorrectSize(imageName, width, height);
      res.type("jpg").send(imageOut);
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export default imagesRoute;
