"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log(req.url);
    next();
};
module.exports = logger;
// const middleware = ['cors', 'logger'];
// app.use(middleware); // app level
// app.get('/', middleware, (req, res) =>  'do stuff' ); // endpoint level
// app.use('cors()', 'logger'); // app level 
// app.get('/', 'cors()', 'logger', (req, res) => 'do stuff'); // endpoint level
//const myMiddleware = (req, res, next, err) => {
// do stuff
//   next();
// };
