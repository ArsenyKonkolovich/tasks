"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterMap = exports.myMap = exports.myFilter = void 0;
const myFilter = (arr, callback) => {
    return arr.reduce((acc, el) => {
        if (callback(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
};
exports.myFilter = myFilter;
const myMap = (arr, callback) => {
    return arr.reduce((acc, el) => {
        const tmpEl = callback(el);
        acc.push(tmpEl);
        return acc;
    }, []);
};
exports.myMap = myMap;
const filterMap = (arr, filterCallback, mapCallback) => {
    return arr.reduce((acc, el) => {
        if (filterCallback(el)) {
            const tmpEl = mapCallback(el);
            acc.push(tmpEl);
        }
        return acc;
    }, []);
};
exports.filterMap = filterMap;
