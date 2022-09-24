/**
 * A job that will run every 15min to clear storage of
 * image which are older then 15mins
 */
module.exports = async function clearStorage() {
  const fs = require("fs");
  const path = require("path");

  const rootDir = "./public/assets/uploads";

  let d = new Date();
  let todaysDir = d.toISOString().split("T")[0];

  const dir = path.join(rootDir, todaysDir);

  let filesInfo = [];

  fs.readdir(dir, function (err, files) {
    if (err) {
      console.log("Error getting directory information.", err);
    } else {
      files.forEach(function (file) {
        const fileObj = {
          name: file,
          date: "",
        };
        fs.stat(dir + `/${file}`, function (err, stats) {
          if (err) {
            console.log("Error in showing stats: ", err);
          } else {
            let last15MinsDate = d.toISOString();
          }
          console.log(fileObj);
        });
      });
    }
  });
  console.log("Clear storage: ", dir);
  console.log(filesInfo);
};
