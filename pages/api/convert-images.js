import fs from "fs";
import path from "path";
import getConfig from "next/config";
import Jimp from "jimp";
import setImageCount from "../../firebase-modules/setCount";
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
    if (conversionQuality == "best") {
      Jimp.read(imageUrl)
        .then((image) => {
          //set the count of the image
          setImageCount();
          return image
            .quality(30) // set JPEG quality
            .write(dir + "/" + fileName + "-Converted.jpeg"); // save
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (conversionQuality == "less") {
    }
    console.log(
      "✅ : Sucessfully converted Image at: ",
      dir + "/" + fileName + "-CONVERTED.jpeg"
    );
  } catch (error) {
    console.log("❌ Error while converting images:", error);
  }

  const apiResponse = {
    originalName: originalName,
    fileName: fileName + "-Converted.jpeg",
    imagePath: dir + "/" + fileName + "-CONVERTED.webp",
  };

  res.status(200).json(apiResponse);
}
