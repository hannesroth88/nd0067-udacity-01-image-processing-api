const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const IMAGEFOLDER = path.resolve("images");

async function resizeAndSave(filePath: string, filePathNew: string, width: number, height: number) {

/**
 *
 * Function resize and saves an image. Image Stream as a Output. 
 *
 * @param filePath            Input FilePath of Image
 * @param filePathNew         Path of new image.
 * @param width               Desired width of image in pixel.
 * @param height              Desired height of image in pixel.
 */

  const imageNewBuffer = await sharp(filePath).resize(width, height).toBuffer();
  sharp(imageNewBuffer).toFile(filePathNew, (err: unknown, info: unknown) => {});
  console.log("image created");
  return imageNewBuffer;
}

async function loadImage(filePath: string) {
  /**
   *
   * Function laods an image. Output is a stream (Buffer) 
   *
   * @param filePath            Input FilePath of Image
   */
  const imageNew = await sharp(filePath).toBuffer();
  return imageNew;
}

async function getImageCorrectSize(fileName: string, width: number, height: number) {
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
