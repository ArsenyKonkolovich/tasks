let arr1 = [1, 3, 8, 2, 235235]
let arr2 = [1, 3, 8, 2, 235235]
let arr3 = [1, 3, 8, 2, 235235]

export const myFilter = (arr, callback) => {
  return arr.reduce((acc, el) => {
    if (callback(el)) {
      acc.push(el)
    }
    return acc
  }, [])
}

export const myMap = (arr, callback) => {
  return arr.reduce((acc, el) => {
    const tmpEl = callback(el)
    acc.push(tmpEl)
    return acc
  }, [])
}

export const filterMap = (arr, filterCallback, mapCallback) => {
  return arr.reduce((acc, el) => {
    if (filterCallback(el)) {
      const tmpEl = mapCallback(el)
      acc.push(tmpEl)
    }
    return acc
  }, [])
}

const a = (el) => {
  return el > 5
}

const b = (el) => {
  return el * 2
}

console.log(myFilter(arr1, a))
console.log(myMap(arr2, b))
console.log(filterMap(arr3, a, b))
