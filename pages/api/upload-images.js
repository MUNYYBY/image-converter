import fs from "fs";
import formidable from "formidable";
import path from "path";
import getConfig from "next/config";
// const sharp = require("sharp");

const serverPath = (staticFilePath) => {
  //latest dir for images targeting todays working directory
  let d = new Date();
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
  try {
    let newFileName = null;

    //Relative directories
    const rootDir = "/public/assets";

    // directory for saving images
    let dir = serverPath(rootDir);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    //
    // use formidable to get uploaded image and fields setting upload directory to the specified directory
    // this saves the image with a uuid to the specified directory but with no extension
    //   const form = new formidable.IncomingForm({
    //     keepExtensions: true,
    //     uploadDir: dir,
    //   });
    //   form.keepExtensions = true;

    //   form.parse(req, async function (err, fields, files) {
    //     if (err) return reject(err);
    //     newFileName = files["image"].newFilename;
    //     resolve({ fields, files });
    //   });
    // });
    // console.log(data.files["image"].filepath);
    res.status(200).json(dir);
  } catch (error) {
    res.status(500).end(error.message);
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
};
