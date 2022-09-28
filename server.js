const next = require("next");
const express = require("express");
const cors = require("cors");
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const { parse } = require("url");

// next-auth base url
const authBaseUrl = "/api";

app.prepare().then(async () => {
  const server = express();

  server.use(cors());
  server.use(
    express.json({
      limit: "200mb",
    })
  );
  server.use(express.static("public"));
  server.use(express.urlencoded({ extended: true }));

  // Handle next-auth routes by nextjs
  server.use(async (req, res, next) => {
    const parsedUrl = parse(req.url, true);

    if (!req.url.startsWith(authBaseUrl)) {
      return next();
    }

    await handle(req, res, parsedUrl);
  });

  server.all("*", (req, res, next) => {
    const parsedUrl = parse(req.url, true);

    return handle(req, res, parsedUrl);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);

    // Starting the job schedular
    const bree = require("./jobs/bree.js");
  });
});
