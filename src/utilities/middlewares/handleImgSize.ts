// import express from "express"

// const logger = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
// console.log(req.url)
// next()
// }
// module.exports = logger;


import express from 'express'
const sharp = require('sharp');
// const img = require('../../assets/imgs/avatar-img.jpg')
import {promises as fsPromises} from 'fs'; 
// /api/images?filename=test&height=100&width=100
let convertedFile = '../../assets/imgsConverted'
const handleImgSize = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  sharp(req.query.filename)
  // sharp(img)
  .rotate()
  .resize(200)
  .jpeg()
  .toBuffer()
  .then( (data: any) => { 
  //   fs.readFile(
  //     `../backend/images/${req.params.id}`,

  //     function (err, image) {
  //         if (err) {
  //             throw err;
  //         }
  //         console.log(image);
         
  //         res.setHeader('Content-Type', 'image/jpg');
  //         res.setHeader('Content-Length', ''); // Image size here
  //         res.setHeader('Access-Control-Allow-Origin', '*'); // If needs to be public
  //         res.send(image);
  //     }
  // );
  console.log('data', data)
    fsPromises.writeFile(convertedFile, data)
    res.send(data);
    res.setHeader('Content-Type', 'image/jpg');
    res.setHeader('Content-Length', ''); // Image size here
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    // console.log(data.toString('base64'));
  })
  .catch( (err: any) => console.log('err in processing', err))
  
  next()
}
module.exports = handleImgSize
// const middleware = ['cors', 'logger'];
// app.use(middleware); // app level
// app.get('/', middleware, (req, res) =>  'do stuff' ); // endpoint level

// app.use('cors()', 'logger'); // app level 
// app.get('/', 'cors()', 'logger', (req, res) => 'do stuff'); // endpoint level

//const myMiddleware = (req, res, next, err) => {
  // do stuff
//   next();
// };

