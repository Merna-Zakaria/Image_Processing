import express from "express";
import sharp from "sharp";
import path = require("path");

const resizeImage = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { filename, width, height } = req.query;
    if (filename) {
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
