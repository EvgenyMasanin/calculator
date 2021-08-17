/* eslint-disable no-param-reassign */
export default function bracketsAutoComplete(string) {
  const bracketsCount = string.split('').reduce(
    (brackets, symbol) => {
      if (symbol === '(') brackets.open++
      else if (symbol === ')') brackets.close++
      return brackets
    },
    { open: 0, close: 0 }
  )
  if (bracketsCount.open > bracketsCount.close) {
    string += ')'.repeat(bracketsCount.open - bracketsCount.close)
  }

  return string
}
