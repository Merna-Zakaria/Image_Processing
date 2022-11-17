import express from 'express'
const routes = require("./routes/index")
const resizeImage = require ("./utilities/middlewares/resizeImage")

const app = express()
app.use(resizeImage)
app.use('/api', routes)

const PORT = 3000;
  
const server = app.listen(PORT, () =>  console.log("Server is Successfully Running, and App is listening on port "+ PORT))
module.exports = server;



