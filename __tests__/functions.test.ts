import conditions from '../src/conditions/index'
import cycles from '../src/cycles/index'
import arrays from '../src/arrays/index'

describe('Condition', () => {
  test('Is more than 10', () => {
    const expected = conditions.isMoreThan10(12)
    expect(expected).toBeTruthy()
  })

  test('Is more than 10 and Even', () => {
    const expected = conditions.isMoreThan10andEven(12)
    expect(expected).toBeTruthy()
  })
})

describe('Cycles', () => {
  // test('Is order by ASC', () => {
  //   const numASC = [1, 5, 9, 10]
  //   const strASC = ['a', 'b', 'e', 'r']
  //   const randomNum = [1, 5, 9, 38]
  //   const randomStr = ['b', 'p', 'a', 'z']
  //   expect(cycles.isOrderByASC(numASC)).toBeTruthy()
  //   expect(cycles.isOrderByASC(strASC)).toBeTruthy()
  //   expect(cycles.isOrderByASC(randomNum)).toBeFalsy()
  //   expect(cycles.isOrderByASC(randomStr)).toBeFalsy()
  // })

  test('Line intersection', () => {
    const str1 = 'asdfgh'
    const str2 = 'fghjkl'

    const haveIntersection = cycles.lineIntersection(str1, str2)
    const withoutIntersection = cycles.lineIntersection(str1, 'zzzzz')

    expect(haveIntersection).toEqual('fgh')
    expect(withoutIntersection).toEqual('')
  })
})

describe('Arrays', () => {
  test('Get even numbers', () => {
    const actual = [6, 10]

    const arr = [1, 5, 6, 7, 10]
    const expected = arrays.getEvenNumbers(arr)

    expect(expected).toEqual(actual)
  })

  test('Get sum of numbers bigger than', () => {
    const arr = [1, 5, 6, 7, 10]
    const expected = arrays.getSumNumbersBiggerThan(arr, 5)

    expect(expected).toEqual(23)
  })

  test('Filter using reduce', () => {
    const actualNum = [6, 7, 10]
    const arrNum = [1, 5, 6, 7, 10]
    const expectedNum = arrays.myFilter(arrNum, (el) => el > 5)

    const actualStr = ['lol', 'blabla']
    const arrStr = ['lol', 'kek', 'blabla']
    const expectedStr = arrays.myFilter(arrStr, (el) => el != 'kek')

    expect(expectedNum).toEqual(actualNum)
    expect(expectedStr).toEqual(actualStr)
  })

  test('Map using reduce', () => {
    const actualNum = [5, 25, 30, 35, 50]
    const arrNum = [1, 5, 6, 7, 10]
    const expectedNum = arrays.myMap(arrNum, (el) => el * 5)

    const actualStr = ['Mr Sam', 'Mr John']
    const arrStr = ['Sam', 'John']
    const expectedStr = arrays.myMap(arrStr, (el) => `Mr ${el}`)

    expect(expectedNum).toEqual(actualNum)
    expect(expectedStr).toEqual(actualStr)
  })

  test('Filter map using reduce', () => {
    const actualNum = [30, 50]
    const arrNum = [1, 5, 6, 7, 10]
    const expectedNum = arrays.filterMap(
      arrNum,
      (el) => el % 2 === 0,
      (el) => el * 5
    )

    const actualStr = ['Mr John']
    const arrStr = ['Sam', 'John']
    const expectedStr = arrays.filterMap(
      arrStr,
      (el) => el != 'Sam',
      (el) => `Mr ${el}`
    )

    expect(expectedNum).toEqual(actualNum)
    expect(expectedStr).toEqual(actualStr)
  })
})
