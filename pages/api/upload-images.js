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
    let fileNames = null;

    //Relative directories
    const rootDir = "/public/assets";

    // directory for saving images
    let dir = serverPath(rootDir);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

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
