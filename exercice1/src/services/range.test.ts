import { range } from './range'

describe('create range array', () => {
  test('generic use', () => {
    expect(range(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(range(1, -1)).toStrictEqual([1, 0, -1])
    expect(range(5, -7)).toStrictEqual([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7])
    expect(range(0, 0)).toStrictEqual([0])
    expect(range(1, 1)).toStrictEqual([1])
  })
})
