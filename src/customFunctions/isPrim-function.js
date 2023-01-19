export const IsPrimNumber = (zipString) => {
  if (!zipString) return

  const zipArray = zipString.split('')
  let counter = 0
  let result = false

  for (let j = 0; j < zipArray.length; j++) {
    const toNumber = parseInt(zipArray[j])

    if (!toNumber || toNumber <= 1) continue

    let divideCounter = 0

    for (let i = 1; i <= toNumber; i++) {
      if (toNumber % i === 0) divideCounter++
    }
    if (divideCounter <= 2) counter++

    if (counter >= 2) {
      result = true
      break
    }
  }

  return result
}
