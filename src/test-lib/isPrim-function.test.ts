import { describe, expect, test } from '@jest/globals'
import { IsPrimNumber } from '../customFunctions/isPrim-function'

describe('is prim number from string', () => {
  test('expect true if input "2222" ', () => {
    expect(IsPrimNumber('2222')).toBe(true)
  })
  test('expect false if input "6946" ', () => {
    expect(IsPrimNumber('6946')).toBe(false)
  })
})
