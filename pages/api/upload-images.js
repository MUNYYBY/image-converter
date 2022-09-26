import fs from "fs";
import formidable from "formidable";
import path from "path";
import getConfig from "next/config";
// const sharp = require("sharp");

//Global date holder
let d = new Date();

const serverPath = (staticFilePath) => {
  //latest dir for images targeting todays working directory
  let todaysDir = d.toISOString().split("T")[0];
  return path.join(
    String(getConfig().serverRuntimeConfig.PROJECT_ROOT),
    staticFilePath,
    todaysDir
  );
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(405).json({ error: `Method '${req.method}' not allowed! ❌` });
  }
  let newFileName = null;
  let originalFileName = null;
  try {
    //Relative directories
    const rootDir = "/public/assets/uploads";

    // directory for saving images
    let dir = serverPath(rootDir);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    // get data from request
    const data = await new Promise(function (resolve, reject) {
      // use formidable to get uploaded image and fields setting upload directory to the specified directory
      // this saves the image with a uuid to the specified directory but with no extension
      const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: dir,
      });
      form.keepExtensions = true;
      //Save image coming from req
      form.parse(req, async function (err, fields, files) {
        if (err) return reject(err);
        newFileName = files["image"].newFilename;
        originalFileName = files["image"].originalFilename;
        resolve({ fields, files });
      });
    });
    const apiResponse = {
      name: originalFileName,
      imagePath: path.join(dir, newFileName),
      uploadTime: d,
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).end(error.message);
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
};
