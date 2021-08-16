export function bracketsAutoComplete(string) {
  const brackets = string.split('').reduce(
    (brackets, symbol) => {
      if (symbol === '(') brackets.open++
      else if (symbol === ')') brackets.close++
      return brackets
    },
    { open: 0, close: 0 }
  )
  if (brackets.open > brackets.close) {
    string += ')'.repeat(brackets.open - brackets.close)
  }

  return string
}
