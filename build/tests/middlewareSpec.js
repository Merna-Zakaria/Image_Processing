"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var baseUrl = 'http://localhost:3000';
var resizeImage = require('../utilities/middlewares/resizeImage');
describe('test resizeImage middleware', function () {
    var functionsSPy;
    beforeEach(function () {
        functionsSPy = {
            resizeImageSpy: resizeImage
        };
        spyOn(functionsSPy, 'resizeImageSpy');
        (0, supertest_1.default)(baseUrl).get('/api/images').query({ filename: 'avatar', width: 100, height: 100 });
        functionsSPy.resizeImageSpy();
    });
    it('test function call', function () {
        expect(functionsSPy.resizeImageSpy).toHaveBeenCalled();
    });
});
