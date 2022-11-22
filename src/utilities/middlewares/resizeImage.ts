import express from "express";
import sharp from "sharp";
import path = require("path");
import fs = require("fs");
const shared = require("../shared");

const resizeImage = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { filename, width, height } = req.query;
    const isParamsValid = shared.handleInvalidReqParams(
      filename as string,
      parseInt(width as string),
      parseInt(height as string),
      res,
      true
    );
    if (
      isParamsValid &&
      !fs.existsSync(
        `src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`
      )
    ) {
      await sharp(path.normalize(`src/assets/images/${filename}.jpg`))
        .resize({
          width: parseInt(width as string) as number,
          height: parseInt(height as string) as number
        })
        .toFile(
          `src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`
        );
    }
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = resizeImage;
