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
    //directory does not exist, create it
    fs.mkdirSync(path.join(IMAGEFOLDER, "/resize"));
  }

  try {
    // create Image
    const imageNewBuffer = await sharp(filePath).resize(width, height).toBuffer();
    sharp(imageNewBuffer).toFile(filePathNew, (err: unknown) => {
      console.error(err);
    });
    return imageNewBuffer;
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}

async function loadImage(filePath: string): Promise<Buffer> {
  /**
   *
   * Function laods an image. Output is a stream (Buffer)
   *
   * @param filePath            Input FilePath of Image
   */
  try {
    const imageNew = await sharp(filePath).toBuffer();
    return imageNew;
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
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

  try {
    const filePathOriginal = path.join(IMAGEFOLDER, `/full/${fileName}.jpg`);
    const filePathSize = path.join(IMAGEFOLDER, `/resize/${fileName}_${width}_${height}.jpg`);
    if (fs.existsSync(filePathSize)) {
      //image with same size already there
      return await loadImage(filePathSize);
    } else {
      //image not there, creating it
      return await resizeAndSave(filePathOriginal, filePathSize, width, height);
    }
  } catch (err) {
    throw new Error(err as string);
  }
}

export default {
  getImageCorrectSize,
};
