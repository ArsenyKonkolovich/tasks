"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumNumbersBiggerThan = exports.evenNumbers = void 0;
const evenNumbers = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};
exports.evenNumbers = evenNumbers;
const sumNumbersBiggerThan = (arr, num) => {
    return arr
        .filter((curNum) => curNum > num)
        .reduce((acc, num) => (acc += num), 0);
};
exports.sumNumbersBiggerThan = sumNumbersBiggerThan;
