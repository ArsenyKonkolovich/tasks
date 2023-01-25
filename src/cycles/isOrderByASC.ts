type NumberOrStringArr = number[] | string[]

const orderByASC = (...arr: NumberOrStringArr): NumberOrStringArr => arr.sort()

const isOrderByASC = (arr: NumberOrStringArr): boolean => {
  const sortedArr = orderByASC(...arr)
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] != sortedArr[i]) {
      return false
    }
  }
  return true
}
