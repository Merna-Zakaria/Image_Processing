import express = require("express");
import fs = require("fs");

const handleInvalidReqParams = (
  filename: string,
  width: number,
  height: number,
  res: express.Response,
  isMW: boolean
): boolean => {
  if (!filename) {
    if (!isMW) {
      res.status(422);
      res.send("Please enter valid file name");
    }
    return false;
  } else if (isNaN(width)) {
    if (!isMW) {
      res.status(422);
      res.send("Please enter valid width");
    }
    return false;
  } else if (isNaN(height)) {
    if (!isMW) {
      res.status(422);
      res.send("Please enter valid height");
    }
    return false;
  } else if (!fs.existsSync(`src/assets/images/${filename}.jpg`)) {
    if (!isMW) {
      res.status(404);
      res.send("Sorry, no images found to be displayed");
    }
    return false;
  } else {
    return true;
  }
};

module.exports = { handleInvalidReqParams };
