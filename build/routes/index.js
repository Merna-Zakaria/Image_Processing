"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var teachers_1 = __importDefault(require("./api/teachers"));
var students_1 = __importDefault(require("./api/students"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('main router');
});
routes.use('/teachers', teachers_1.default);
routes.use('/students', students_1.default);
module.exports = routes;
