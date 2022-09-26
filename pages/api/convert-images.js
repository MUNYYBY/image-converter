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
  try {
    //Relative directories
    const rootDir = "/public/assets/uploads";
    // directory for saving images
    let dir = serverPath(rootDir);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (error) {
    console.log("❌ Error while converting images:", error);
  }
  const { imageUrl, conversionQuality } = req.query;

  console.log(imageUrl, conversionQuality);

  res.status(200).json("convert images end point");
}
