"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var handleInvalidReqParams = function (filename, width, height, res, isMW) {
    if (!filename) {
        if (!isMW) {
            res.status(422);
            res.send("Please enter valid file name");
        }
        return false;
    }
    else if (isNaN(width)) {
        if (!isMW) {
            res.status(422);
            res.send("Please enter valid width");
        }
        return false;
    }
    else if (isNaN(height)) {
        if (!isMW) {
            res.status(422);
            res.send("Please enter valid height");
        }
        return false;
    }
    else if (!fs.existsSync("src/assets/images/".concat(filename, ".jpg"))) {
        if (!isMW) {
            res.status(404);
            res.send("Sorry, no images found to be displayed");
        }
        return false;
    }
    else {
        return true;
    }
};
module.exports = { handleInvalidReqParams: handleInvalidReqParams };
