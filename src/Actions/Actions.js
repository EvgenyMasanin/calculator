export class Action {
  constructor(symbol, mathSymbol, operation, name, changeable) {
    this.name = name
    this.symbol = symbol
    this.mathSymbol = mathSymbol
    this.operation = operation
    this.changeable = changeable
  }

  toString() {
    return this.name
  }
}

function action(symbol, mathSymbol, operation, name, changeable = false) {
  return new Action(symbol, mathSymbol, operation, name, changeable)
}
export const actionTypes = {
  number: 'number',
  operation: 'operation',
  passiveOperation: 'passiveOperation',
  mathOperation: 'mathOperation',
}

export const actions = {
  zero: action('0', '0', actionTypes.number, 'zero'),
  one: action('1', '1', actionTypes.number, 'one'),
  two: action('2', '2', actionTypes.number, 'two'),
  three: action('3', '3', actionTypes.number, 'three'),
  four: action('4', '4', actionTypes.number, 'four'),
  five: action('5', '5', actionTypes.number, 'five'),
  six: action('6', '6', actionTypes.number, 'six'),
  seven: action('7', '7', actionTypes.number, 'seven'),
  eight: action('8', '8', actionTypes.number, 'eight'),
  nine: action('9', '9', actionTypes.number, 'nine'),
  plus: action('+', '+', actionTypes.operation, 'plus', true),
  minus: action('-', '-', actionTypes.operation, 'minus', true),
  divide: action('/', '/', actionTypes.operation, 'divide', true),
  multiply: action('*', '*', actionTypes.operation, 'multiply', true),
  equals: action('=', '=', actionTypes.passiveOperation, 'equals'),
  comma: action('.', '.', actionTypes.operation, 'comma', true),
  clear: action('', '', actionTypes.passiveOperation, 'clear'),
  sqrt2: action('√', 'Math.sqrt(', actionTypes.mathOperation, 'sqrt2'),
  cbrt3: action('³√', 'Math.cbrt(', actionTypes.mathOperation, 'cbrt3'),
  sqrtY: action('^(1/', '**(1/', actionTypes.operation, 'sqrtY'),
  openBracket: action('(', '(', actionTypes.mathOperation, 'openBracket'),
  closeBracket: action(')', ')', actionTypes.mathOperation, 'closeBracket'),
  powM1: action('^(-1)', '**(-1)', actionTypes.operation, 'powM1'),
  pow2: action('^(2)', '**(2)', actionTypes.operation, 'pow2'),
  pow3: action('^(3)', '**(3)', actionTypes.operation, 'pow3'),
  powY: action('^(', '**(', actionTypes.operation, 'powY'),
  expPow: action('e^(', 'Math.exp(', actionTypes.mathOperation, 'expPow'),
  tenPow: action('10^(', '10**(', actionTypes.number, 'tenPow'),
  ln: action('ln(', 'Math.log(', actionTypes.mathOperation, 'ln'),
  log10: action('log₁₀(', 'Math.log10(', actionTypes.mathOperation, 'log10'),
  toggle: action('', '', actionTypes.passiveOperation, 'toggle'),
  percent: action('', '', actionTypes.passiveOperation, 'percent'),
  mr: action('', '', actionTypes.passiveOperation, 'mr'),
  mPlus: action('', '', actionTypes.passiveOperation, 'mPlus'),
  mMinus: action('', '', actionTypes.passiveOperation, 'mMinus'),
  mc: action('', '', actionTypes.passiveOperation, 'mc'),
  switch: action('', '', actionTypes.passiveOperation, 'switch'),
  plug: action('#', '#', '', 'plug'),
}
