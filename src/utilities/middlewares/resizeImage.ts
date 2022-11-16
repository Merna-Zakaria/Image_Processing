import express from 'express'
const sharp = require('sharp');
const path = require('path')

 async function resizeImage (req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    let {filename, width, height} = req.query
    await sharp(path.normalize(`src/assets/images/${filename}.jpg`))
      .resize({width: parseInt(width as string) as number, height:  parseInt(height as string) as number})
      .toFile(`src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`);
  } catch (error) {
    console.log(error);
  }
  next()
}

module.exports = resizeImage

