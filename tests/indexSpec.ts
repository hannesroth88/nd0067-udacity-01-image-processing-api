import sharp from "sharp";
import imageLogic from "../src/components/images/imageLogic";
import imageValidation from "../src/components/images/imageValidation";
import axios from "axios";
const AXIOS_OPTIONS = {
  baseURL: "http://localhost:8080",
};

describe("Main Test", () => {
  describe("Image Logic Unit Tests", () => {
    it("Image not found on server", async () => {
      const data = await imageValidation.isImageFound("someimageNameNotThere");
      expect(data).toBeFalse();
    });
    it("check Image Size", async () => {
      const imageName = "encenadaport";
      const widthInput = 400;
      const widthHeight = 200;
      const newImage = await imageLogic.getImageCorrectSize(imageName, widthInput, widthHeight);

      await sharp(newImage)
        .metadata()
        .then(function (metadata: sharp.Metadata) {
          expect(metadata.width).toEqual(widthInput);
          return metadata.width;
        });
    });
  });

  describe("Express Server", () => {
    it("Check Endpoint", async () => {
      const result = await axios.get("/api/images", AXIOS_OPTIONS);
      expect(result.status === 200);
    });
  });
});
