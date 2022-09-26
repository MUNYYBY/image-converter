import fs from "fs";
import path from "path";
import getConfig from "next/config";

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

  const { fileName } = req.query;

  const rootDir = "/public/assets/uploads";
  const fileUrl = path.join(serverPath(rootDir) + fileName);
  res.download(fileUrl);

  res
    .status(200)
    .json("This api route is dedicated to downloading converted Images!");
}
