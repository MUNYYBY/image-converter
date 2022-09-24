console.debug("Job Schedular Started!!!");

const Bree = require("bree");
const clearStorage = require("./clearStorage.js");

const bree = new Bree({
  jobs: [
    {
      name: "clearStorage",
      interval: "15mins",
      path: clearStorage,
    },
  ],
});

bree.start();

module.exports = bree;
