import sharp from "sharp";
import fs from "fs";
import path from "path";
const IMAGEFOLDER = path.resolve("images");

async function resizeAndSave(filePath: string, filePathNew: string, width: number, height: number): Promise<Buffer> {
  /**
   *
   * Function resize and saves an image. Image Stream as a Output.
   *
   * @param filePath            Input FilePath of Image
   * @param filePathNew         Path of new image.
   * @param width               Desired width of image in pixel.
   * @param height              Desired height of image in pixel.
   */

  // check if directory exists
  if (!fs.existsSync(path.join(IMAGEFOLDER, "/resize"))) {
    console.log("Directory does not exist, create it:" + path.join(IMAGEFOLDER, "/resize"));
    fs.mkdirSync(path.join(IMAGEFOLDER, "/resize"));
  }

  const imageNewBuffer = await sharp(filePath).resize(width, height).toBuffer();
  sharp(imageNewBuffer).toFile(filePathNew, (err: unknown) => {
    console.error(err);
  });
  console.log("image created");
  return imageNewBuffer;
}

async function loadImage(filePath: string): Promise<Buffer> {
  /**
   *
   * Function laods an image. Output is a stream (Buffer)
   *
   * @param filePath            Input FilePath of Image
   */
  const imageNew = await sharp(filePath).toBuffer();
  return imageNew;
}

async function getImageCorrectSize(fileName: string, width: number, height: number): Promise<Buffer> {
  /**
   *
   * Function checks if a thumbnail of the image in same pixel was already created.
   * If yes resize and save.
   * If no jsut load image from path.
   *
   * @param fileName            Input FilePath of Image
   * @param width               Desired width of image in pixel.
   * @param height              Desired height of image in pixel.
   */
  const filePathOriginal = path.join(IMAGEFOLDER, `/full/${fileName}.jpg`);
  const filePathSize = path.join(IMAGEFOLDER, `/resize/${fileName}_${width}_${height}.jpg`);
  if (fs.existsSync(filePathSize)) {
    console.log(`image with same size already there`);
    return await loadImage(filePathSize);
  } else {
    console.log(`image not there, creating it`);
    return await resizeAndSave(filePathOriginal, filePathSize, width, height);
  }
}

export default {
  getImageCorrectSize,
};
