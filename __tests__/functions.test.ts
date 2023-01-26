import conditions from '../src/conditions/index'
import cycles from '../src/cycles/index'

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

    expect(cycles.lineIntersection(str1, str2)).toEqual('fgh')
    expect(cycles.lineIntersection(str1, 'zzzzz')).toEqual('')
  })
})
