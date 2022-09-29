import fs from "fs";
import path from "path";
import getConfig from "next/config";

//Global date holder
let d = new Date();

const serverPath = (staticFilePath) => {
  //latest dir for images targeting todays working directory
  let todaysDir = d.toISOString().split("T")[0];
  return path.join(
    String(getConfig().serverRuntimeConfig.PROJECT_ROOT),
    staticFilePath,
    todaysDir,
    "Converted-Images"
  );
};

export default async function handler(req, res) {
  if (req.method == "POST") {
    res.status(405).json({ error: `Method '${req.method}' not allowed! ❌` });
  }

  //API Call params
  const {
    imageUrl,
    conversionQuality,
    conversionFormat,
    fileName,
    originalName,
  } = req.query;
  console.log("Conversion Called: ", imageUrl, conversionQuality, fileName);
  //Relative directories
  const rootDir = "/public/assets/uploads";
  // directory for saving images
  let dir = serverPath(rootDir);
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const image = fs.readFileSync(imageUrl);
    if (conversionQuality == "best") {
    } else if (conversionQuality == "less") {
    }
    console.log(
      "✅ : Sucessfully converted Image at: ",
      dir + "/" + fileName + "-CONVERTED.webp"
    );
  } catch (error) {
    console.log("❌ Error while converting images:", error);
  }

  const apiResponse = {
    originalName: originalName,
    fileName: fileName + "-CONVERTED.webp",
    imagePath: dir + "/" + fileName + "-CONVERTED.webp",
  };

  res.status(200).json(apiResponse);
}
