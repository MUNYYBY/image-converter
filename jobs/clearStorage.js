/**
 * A job that will run every 15min to clear storage of
 * image which are older then 15mins
 */

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

module.exports = async function clearStorage() {
  const fs = require("fs");
  const path = require("path");
  const moment = require("moment");

  const rootDir = "./public/assets/uploads";

  const dir = serverPath(rootDir);

  const minsAgo = new Date(d.getTime() - 1000 * 60 * 15);

  //Delete Images from uploads directory

  try {
    fs.readdir(dir, function (err, files) {
      if (err) {
        console.log("Error getting uploads directory information.", err);
      } else {
        console.log("------------------------------");
        console.log("CLEARING STORAGE OF UPLOADS...");
        console.log("------------------------------\n");
        files.forEach(function (file) {
          fs.stat(dir + `/${file}`, function (err, stats) {
            if (err) {
              console.log("Error in showing stats of upload files: ", err);
            } else {
              if (!stats.isDirectory()) {
                if (stats.ctime <= minsAgo) {
                  fs.unlinkSync(dir + `/${file}`);
                  console.log(
                    "❌: ",
                    file,
                    ", ",
                    moment(stats.ctime).fromNow()
                  );
                } else {
                  console.log(
                    "✅: ",
                    file,
                    ", ",
                    moment(stats.ctime).fromNow()
                  );
                }
              } else {
                console.log("⚡ Fetched file is directory: ", file);
              }
            }
          });
        });
      }
    });
  } catch (error) {
    console.log(
      "❌ Error occured while clearing storage of uploads directory: ",
      error
    );
  }

  //Delete Images from converted directory

  const dirConverted = path.join(dir, "Converted-Images");

  try {
    fs.readdir(dirConverted, function (err, files) {
      if (err) {
        console.log(
          "Error getting converted-images directory information.",
          err
        );
      } else {
        console.log("--------------------------------------");
        console.log("CLEARING STORAGE OF COVERTED-IMAGES...");
        console.log("--------------------------------------\n");
        files.forEach(function (file) {
          fs.stat(dirConverted + `/${file}`, function (err, stats) {
            if (err) {
              console.log(
                "Error in showing stats of converted-images files: ",
                err
              );
            } else {
              if (!stats.isDirectory()) {
                if (stats.ctime <= minsAgo) {
                  fs.unlinkSync(dirConverted + `/${file}`);
                  console.log(
                    "❌: ",
                    file,
                    ", ",
                    moment(stats.ctime).fromNow()
                  );
                } else {
                  console.log(
                    "✅: ",
                    file,
                    ", ",
                    moment(stats.ctime).fromNow()
                  );
                }
              } else {
                console.log("⚡ Fetched file is directory: ", file);
              }
            }
          });
        });
      }
    });
  } catch (error) {
    console.log(
      "❌ Error occured while clearing storage of converted-images directory: ",
      error
    );
  }
};
