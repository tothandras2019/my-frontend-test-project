import { ResultsType } from '../DATA/data-types'

type FilteredOnePageDataType = { from: number; to: number; data: ResultsType[] }

export const FilteredOnePageData = (from: number, to: number, data: ResultsType[]) => {
  let minFrom = from
  let maxTo = to

  if (from < 0) {
    minFrom = from < 0 ? 0 : from
    maxTo = minFrom + 10
  }

  if (to > data.length) {
    maxTo = to > data.length ? data.length : to
    minFrom = maxTo - 10
  }

  const res = data.filter((dat, index) => index >= minFrom && index < maxTo)
  return res
}
