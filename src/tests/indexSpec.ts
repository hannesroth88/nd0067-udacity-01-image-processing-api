import imageLogic from "../imageLogic";


describe("Image Logic", () => {
  it("image not found", async () => {
    const data = await imageLogic.scaleImage("someimageNameNotThere", 100, 100);
    expect(data).toEqual("Image not found");
  });



})