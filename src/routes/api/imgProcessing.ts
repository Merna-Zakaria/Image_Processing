import express from 'express'
const imgProcessing = express.Router();
var fs = require('fs');
const path = require('path')
imgProcessing.get('/', (req, res) => { 
  console.log('query params', res)
  
  // function(req,res){
    fs.readFile(path.normalize('public/images/avatar.jpeg'), function(err: any, data: any) {
      if (err) throw err; // Fail if the file can't be read.
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
      res.send(data)
  });
// }
});

export default imgProcessing