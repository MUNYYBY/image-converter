import fs from "fs";
import formidable from "formidable";
import path from "path";
import getConfig from "next/config";
const sharp = require("sharp");

const serverPath = (staticFilePath) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(405).json({ error: `Method '${req.method}' not allowed! ❌` });
  }
  res.status(200).json("Upload images end point");
}
