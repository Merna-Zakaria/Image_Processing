"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs = require('fs');
var path = require('path');
var images = express_1.default.Router();
images.get('/', function (req, res) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    if (filename) {
        fs.readFile(path.normalize("src/assets/imagesProcessed/".concat(filename, "-").concat(width, "x").concat(height, ".jpg")), function (err, data) {
            if (err)
                throw err; // Fail if the file can't be read.
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data); // Send the file data to the browser.
        });
    }
    else {
        res.status(404);
        res.send('Sorry, no images found to be displayed');
    }
    // try{
    //   if(filename){
    //     fs.readFile(path.normalize(`src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`), (err: express.Errback, data: express.Response) => {
    //       if (err) throw err; // Fail if the file can't be read.
    //       res.writeHead(200, {'Content-Type': 'image/jpeg'});
    //       res.end(data); // Send the file data to the browser.
    //   });
    //   }
    // }catch(err){
    //   console.log('errrrrrrrrrrrrrrrr')
    //   res.send('Sorry, no images found to be displayed')
    // }
});
exports.default = images;
