export function bracketsAutoComplete(string) {
  const brakets = string.split('').reduce(
    (brakets, symbol) => {
      if (symbol === '(') brakets.open++
      else if (symbol === ')') brakets.close++
      return brakets
    },
    { open: 0, close: 0 }
  )
  if (brakets.open > brakets.close) {
    string += ')'.repeat(brakets.open - brakets.close)
  }

  return string
}
