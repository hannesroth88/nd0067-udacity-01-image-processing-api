import { Metadata } from "sharp";
import imageLogic from "../components/imageLogic";
const sharp = require("sharp");

describe("Image Logic", () => {
  it("Image not found on server", async () => {
    const data = await imageLogic.run("someimageNameNotThere", 100, 100);
    expect(data).toEqual("Image not found on server");
  });

  it("check Image Size", async () => {
    // TODO Setup to use function
    const widthInput = 100;
    const image = sharp("images/full/encenadaport.jpg");
    const widthMetadata = await image.metadata().then(function (metadata: Metadata) {
      return metadata.width;
    });
    expect(widthMetadata).toEqual(widthInput);
  });

  //TODO Tests:
  // Does an Image come back?
  // image is there but not the desired size
});
