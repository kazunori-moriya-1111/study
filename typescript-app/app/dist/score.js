"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
const foods_js_1 = require("./foods.js");
class Score {
    get totalScore() {
        const foods = foods_js_1.Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    constructor() { }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
exports.Score = Score;
