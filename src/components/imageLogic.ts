const fs = require("fs");
const path = require("path");
const appDir = path.dirname(require?.main?.filename);

async function run(fileName: string, width: number, height: number): Promise<string> {
  const filePath = path.join(appDir, "..", `/images/full/${fileName}.jpg`);

  if (!fs.existsSync(filePath)) {
    return "Image not found on server";
  } else {
    return "found";
  }
}

export default {
  run,
};
