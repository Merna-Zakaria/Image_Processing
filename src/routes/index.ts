import express from 'express'
import imgProcessing from './api/imgProcessing'
const routes = express.Router();

routes.get('/', (req, res) => { 
  res.send('main router')
});

routes.use('/images', imgProcessing)

module.exports = routes;