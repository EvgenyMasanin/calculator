class Button {
  constructor(className, action, content) {
    this.className = className
    this.content = content
    this.dataAction = action
  }
}

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
  miltiply: action('*', '*', actionTypes.operation, 'miltiply', true),
  equals: action('=', '=', actionTypes.passiveOperation, 'equals'),
  comma: action('.', '.', actionTypes.operation, 'comma', true),
  clear: action('', '', actionTypes.passiveOperation, 'clear'),
  sqrt2: action('√', 'Math.sqrt(', actionTypes.mathOperation, 'sqrt2'),
  sqrt3: action('³√', 'Math.cbrt(', actionTypes.mathOperation, 'sqrt3'),
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

const buttons = [
  new Button('calculator__item hard-opirations', actions.openBracket, '('),
  new Button('calculator__item hard-opirations', actions.closeBracket, ')'),
  new Button('calculator__item hard-opirations', actions.mc, 'mc'),
  new Button('calculator__item hard-opirations', actions.mPlus, 'm+'),
  new Button('calculator__item  hard-opirations', actions.mMinus, 'm-'),
  new Button('calculator__item  hard-opirations', actions.mr, 'mr'),
  new Button('calculator__item  hard-opirations', actions.clear, 'AC'),
  new Button('calculator__item  hard-opirations', actions.toggle, '±'),
  new Button('calculator__item  hard-opirations', actions.percent, '%'),
  new Button(
    'calculator__item simple-opirations',
    actions.divide,
    '<i class="fas fa-divide"></i>'
  ),

  new Button(
    'calculator__item  hard-opirations',
    actions.switch,
    '2<sup>nd</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.pow2,
    'x<sup>2</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.pow3,
    'x<sup>3</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.powY,
    'x<sup>y</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.expPow,
    'e<sup>x</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.tenPow,
    '10<sup>x</sup>'
  ),
  new Button('calculator__item numbers', actions.seven, '7'),
  new Button('calculator__item numbers', actions.eight, '8'),
  new Button('calculator__item numbers', actions.nine, '9'),
  new Button(
    'calculator__item simple-opirations',
    actions.miltiply,
    '<i class="fas fa-times"></i>'
  ),

  new Button(
    'calculator__item  hard-opirations',
    actions.powM1,
    '<sup>1</sup>/<sub>x</sub>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.sqrt2,
    '<sup>2</sup><i class="fas fa-square-root-alt"></i>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.sqrt3,
    '<sup>3</sup><i class="fas fa-square-root-alt"></i>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.sqrtY,
    '<sup>y</sup><i class="fas fa-square-root-alt" ></i>'
  ),
  new Button('calculator__item hard-opirations', actions.ln, 'ln'),
  new Button(
    'calculator__item hard-opirations',
    actions.log10,
    'log<sub>10</sub>'
  ),
  new Button('calculator__item numbers', actions.four, '4'),
  new Button('calculator__item numbers', actions.five, '5'),
  new Button('calculator__item numbers', actions.six, '6'),
  new Button(
    'calculator__item simple-opirations',
    actions.minus,
    '<i class="fas fa-minus"></i>'
  ),

  new Button('calculator__item hard-opirations', actions.plug, 'x!'),
  new Button('calculator__item hard-opirations switch', actions.plug, 'sin'),
  new Button('calculator__item hard-opirations switch', actions.plug, 'cos'),
  new Button('calculator__item hard-opirations switch', actions.plug, 'tan'),
  new Button('calculator__item hard-opirations', actions.plug, 'e'),
  new Button('calculator__item hard-opirations', actions.plug, 'EE'),
  new Button('calculator__item numbers', actions.one, '1'),
  new Button('calculator__item numbers', actions.two, '2'),
  new Button('calculator__item numbers', actions.three, '3'),
  new Button(
    'calculator__item simple-opirations',
    actions.plus,
    '<i class="fas fa-plus"></i>'
  ),

  new Button(
    'calculator__item hard-opirations bottom-btn-left',
    actions.plug,
    'Rad'
  ),
  new Button('calculator__item hard-opirations', actions.plug, 'sinh'),
  new Button('calculator__item hard-opirations', actions.plug, 'cosh'),

  new Button('calculator__item hard-opirations', actions.plug, 'tanh'),
  new Button('calculator__item hard-opirations', actions.plug, 'π'),
  new Button('calculator__item hard-opirations', actions.plug, 'Rand'),
  new Button('calculator__item numbers zero', actions.zero, '0'),
  new Button('calculator__item numbers', actions.comma, '.'),
  new Button(
    'calculator__item simple-opirations bottom-btn-right',
    actions.equals,
    '<i class="fas fa-equals"></i>'
  ),
]

export const HTMLButtons = buttons.map((button) => {
  const HTMLButton = document.createElement('div')
  const content = document.createElement('div')
  const target = document.createElement('div')

  HTMLButton.className = button.className

  content.classList.add('item__content')
  content.innerHTML = `<div>${button.content}</div>`

  target.dataset.type = button.dataAction
  target.classList.add('item__target')

  HTMLButton.append(target)
  HTMLButton.append(content)

  return HTMLButton
})
