export const evenNumbers = (arr: number[] | []): number[] | [] => {
  return arr.filter((num) => num % 2 === 0)
}

export const sumNumbersBiggerThan = (
  arr: number[] | [],
  num: number
): number => {
  return arr
    .filter((curNum) => curNum > num)
    .reduce((acc, num) => (acc += num), 0)
}
