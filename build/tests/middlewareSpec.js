"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var resizeImage = require('../utilities/middlewares/resizeImage');
describe('test resizeImage middleware', function () {
    var functionsSPy;
    var server;
    beforeEach(function () {
        //  functionsSPy = {
        //   resizeImageSpy: resizeImage
        // };
        // spyOn(functionsSPy, resizeImage);
        server = require('../app');
        (0, supertest_1.default)(server).get('/api/images').query({ filename: 'avatar', width: 100, height: 100 });
        // functionsSPy.resizeImageSpy()
    });
    it('test function call', function () {
        // resizeImage()
        // spyOn(window, resizeImage)
        expect(resizeImage).toHaveBeenCalled();
    });
});
