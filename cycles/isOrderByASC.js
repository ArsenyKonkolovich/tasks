const orderByASC = (...arr) => arr.sort()

const isOrderByASC = (arr) => {
  const sortedArr = orderByASC(...arr)
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] != sortedArr[i]) {
      return false
    }
  }
  return true
}
