import express from "express";
import cors from 'cors';
const routes = require("./routes/index");
const resizeImage = require("./utilities/middlewares/resizeImage");

const app = express();
app.use(cors({
  "allowedHeaders": [
    'Origin', 'X-Requested-With',
    'Content-Type', 'Accept',
    'X-Access-Token', 'Authorization', 'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods'
  ],
  "methods": 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  "preflightContinue": true,
  "origin": '*',
}));
app.use(resizeImage);
app.use("/api", routes);


const PORT = 5000;

const server = app.listen(PORT, () =>
  console.log(
    "Server is Successfully Running, and App is listening on port" + PORT
  )
);
module.exports = server;
