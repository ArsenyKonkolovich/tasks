"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMoreThan10andEven = exports.isMoreThan10 = void 0;
const isMoreThan10 = (num) => {
    return num > 10;
};
exports.isMoreThan10 = isMoreThan10;
const isMoreThan10andEven = (num) => {
    return num > 10 && num % 2 === 0;
};
exports.isMoreThan10andEven = isMoreThan10andEven;
