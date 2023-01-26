import conditions from '../src/conditions/index'
import cycles from '../src/cycles/index'
import arrays from '../src/arrays/index'
import { Foo, Types } from '../src/arrays/objectMethod'

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

  test('Object Foo', () => {
    const foo1 = new Foo(5, Types.BEST, new Date(), 'Sosat')
    const foo2 = new Foo(7, Types.AVERAGE, new Date(), 'Lezhat')
    const foo3 = new Foo(2, Types.BEST, new Date(), 'Bla bla')
    const foo4 = new Foo(17, Types.WORST, new Date(), 'Pampam')

    const arrOfFoo = [foo1, foo2, foo3, foo4]
    const expected1 = foo1.stringifyArray(arrOfFoo, Types.AVERAGE, 2, 0)
    const expected2 = foo1.stringifyArray(arrOfFoo, Types.BEST, 4, 0)
    const actual1 = [
      '1 - 26.0.2023 Была добавлена строка 7 c содержимым Lezhat',
    ]
    const actual2 = [
      '0 - 26.0.2023 Была добавлена строка 5 c содержимым Sosat',
      '2 - 26.0.2023 Была добавлена строка 2 c содержимым Bla bla',
    ]

    expect(expected1).toEqual(actual1)
    expect(expected2).toEqual(actual2)
  })
})
