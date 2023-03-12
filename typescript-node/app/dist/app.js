"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use('/', (req, res, next) => {
    console.log("test");
    next();
});
app.get('/', (req, res, next) => {
    res.send('<h1>Hello0</h1>');
});
app.use('/', (err, req, res, next) => {
});
app.listen(3000);
