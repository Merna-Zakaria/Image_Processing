import express from "express";
const fs = require("fs");
const path = require("path");
const shared = require("../../utilities/shared");
const images = express.Router();

images.get("/", (req: express.Request, res: express.Response): void => {
  const { filename, width, height } = req.query;
  const isParamsValid = shared.handleInvalidReqParams(
    filename as string,
    parseInt(width as string),
    parseInt(height as string),
    res
  );
  if (isParamsValid && fs.existsSync(`src/assets/images/${filename}.jpg`)) {
    fs.readFile(
      path.normalize(
        `src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`
      ),
      (err: express.Errback, data: express.Response) => {
        if (err) throw err; // Fail if the file can"t be read.
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data); // Send the file data to the browser.
      }
    );
  } else {
    isParamsValid;
  }
});

images.get("/resize", (req: express.Request, res: express.Response): void => {
  const { imgUrl, width, height } = req.query;
  
  // const isParamsValid = shared.handleInvalidReqParams(
  //   imgUrl as string,
  //   parseInt(width as string),
  //   parseInt(height as string),
  //   res
  // );
  // if (isParamsValid) {
    // fs.readFile(
    //   path.normalize(
    //     `src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`
    //   ),
      (err: express.Errback, data: express.Response) => {
        if (err) throw err; // Fail if the file can"t be read.
        res.writeHead(200);
        res.end(data); // Send the file data to the browser.
      }
    // );
  // } else {
  //   isParamsValid;
  // }
});

export default images;
