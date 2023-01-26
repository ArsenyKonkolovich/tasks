// type NumberOrStringArr = number[] | string[]

// const orderByASCstr = (...arr: string[]): string[] => {
//   return arr.sort()
// }

// const orderByASCnum = (...arr: number[]): number[] => {
//   return arr.sort((a,b) => a - b)
// }

// const isOrderByASC = (arr: NumberOrStringArr): boolean => {
//   const sortedArr = orderByASCstr(...arr)
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] != sortedArr[i]) {
//       return false
//     }
//   }
//   return true
// }

// export default isOrderByASC
