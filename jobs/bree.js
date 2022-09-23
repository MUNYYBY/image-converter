console.debug("Job Schedular Started!!!");

const bree = require("bree");

const bree = new bree({
  jobs: [
    {
      name: "Clear images from storage",
      interval: "1min",
    },
  ],
});

bree.start();

module.exports = bree;
