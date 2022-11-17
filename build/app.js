"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = require("./routes/index");
var resizeImage = require("./utilities/middlewares/resizeImage");
var app = (0, express_1.default)();
app.use(resizeImage);
app.use('/api', routes);
var PORT = 3000;
var server = app.listen(PORT, function () { return console.log("Server is Successfully Running, and App is listening on port " + PORT); });
module.exports = server;
