let arr = [1, 3, 8, 2, 235235]

export const evenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0)
}

export const sumNumbersBiggerThan = (arr, num) => {
  return arr
    .filter((curNum) => curNum > num)
    .reduce((acc, num) => (acc += num), 0)
}
