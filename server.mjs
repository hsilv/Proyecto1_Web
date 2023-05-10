import ignore from "ignore-styles";
import express from "express";
import path from "path";
import React from "react";
import ReactDom from "react-dom/server";
import { App } from "../compile/App.js";

const app = express();

app.use(
  "/dist",
  express.static(path.join(__dirname, "."), {
    setHeaders: (res, path) => {
      if (path.endsWith("/index.html")) {
        res.setHeader("X-Content-Type-Options", "nosniff");
      }
    },
  })
);

app.use(
  "/",
  express.static(path.join(__dirname, "..", "/"), {
    setHeaders: (res, path) => {
      if (path.endsWith("/index.html")) {
        res.setHeader("X-Content-Type-Options", "nosniff");
      }
    },
  })
);

app.get("", async (req, res) => {
  const html = (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://artists.soundcloud.com/favicon.png" />
        <title>SoundCloud for Artists</title>
        <script defer="defer" src="./dist/index.bundle.js"></script>
        <link href="./dist/index.css" rel="stylesheet"></link>
      </head>
      <body>
        <div id="root"></div>
        <App />
      </body>
    </html>
  );
  res.send(ReactDom.renderToString(html));
});

app.listen(4000, () => {
  console.log("server started: http://localhost:4000");
});
