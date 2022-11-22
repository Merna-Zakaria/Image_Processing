"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs = require("fs");
var path = require("path");
var shared = require("../../utilities/shared");
var images = express_1.default.Router();
images.get("/", function (req, res) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    var isParamsValid = shared.handleInvalidReqParams(filename, parseInt(width), parseInt(height), res);
    if (isParamsValid && fs.existsSync("src/assets/images/".concat(filename, ".jpg"))) {
        fs.readFile(path.normalize("src/assets/imagesProcessed/".concat(filename, "-").concat(width, "x").concat(height, ".jpg")), function (err, data) {
            if (err)
                throw err; // Fail if the file can"t be read.
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data); // Send the file data to the browser.
        });
    }
    else {
        isParamsValid;
    }
});
exports.default = images;
