import express from 'express'
const imgProcessing = express.Router();

imgProcessing.get('/', (req, res) => { 
  console.log('query params', req.query)
  // res.send('imgProcessing')
});

export default imgProcessing