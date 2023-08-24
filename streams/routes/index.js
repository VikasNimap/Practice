var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/video', function (req, res, next) {
  const range = '10';
  if (!range) {
    res.status(400).send("Requires Range header");
  }
  const videoPath = "../streams/video.mp4";
  const videoSize = fs.statSync("video.mp4").size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
  res.end()
});

module.exports = router;
