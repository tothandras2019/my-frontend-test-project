import { describe, expect, test } from '@jest/globals'
import { FilteredOnePageData } from '../customFunctions/paging-function'
import { TestRestultData } from './paging.test.data'

describe('FilteredOnePageData return filtered ResultsType array', () => {
  test('expect to return the array that add to input', () => {
    const expected = TestRestultData
    expect(FilteredOnePageData(0, 10, expected)).toEqual(expect.arrayContaining(expected))
  })
})
