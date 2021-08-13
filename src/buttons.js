class Button {
  constructor(className, action, content) {
    this.className = className
    this.content = content
    this.dataAction = action
  }
}

export class Action {
  constructor(symbol, mathSymbol, isOperation, name, changeable) {
    this.name = name
    this.symbol = symbol
    this.mathSymbol = mathSymbol
    this.isOperation = isOperation
    this.changeable = changeable
  }

  toString() {
    return this.name
  }
}

function action(symbol, mathSymbol, isOperation, name, changeable = false) {
  return new Action(symbol, mathSymbol, isOperation, name, changeable)
}

export const actions = {
  zero: action('0', '0', false, 'zero'),
  one: action('1', '1', false, 'one'),
  two: action('2', '2', false, 'two'),
  three: action('3', '3', false, 'three'),
  four: action('4', '4', false, 'four'),
  five: action('5', '5', false, 'five'),
  six: action('6', '6', false, 'six'),
  seven: action('7', '7', false, 'seven'),
  eight: action('8', '8', false, 'eight'),
  nine: action('9', '9', false, 'nine'),
  plus: action('+', '+', true, 'plus', true),
  minus: action('-', '-', true, 'minus', true),
  divide: action('/', '/', true, 'divide', true),
  miltiply: action('*', '*', true, 'miltiply', true),
  equals: action('=', '=', false, 'equals'),
  comma: action('.', '.', true, 'comma', true),
  clear: action('', '', false, 'clear'),
  sqrt2: action('√', 'Math.sqrt(', false, 'sqrt2'),
  sqrt3: action('³√', 'Math.cbrt(', false, 'sqrt3'),
  sqrtY: action('^(1/', '**(1/', true, 'sqrtY'),
  openBracket: action('(', '(', false, 'openBracket'),
  closeBracket: action(')', ')', false, 'closeBracket'),
  powM1: action('^(-1)', '**(-1)', false, 'powM1'),
  pow2: action('^(2)', '**(2)', false, 'pow2'),
  pow3: action('^(3)', '**(3)', false, 'pow3'),
  powY: action('^(', '**(', true, 'powY'),
  expPow: action('e^(', 'Math.exp(', false, 'expPow'),
  tenPow: action('10^(', '10**(', false, 'tenPow'),
  ln: action('ln(', 'Math.log(', false, 'ln'),
  log10: action('log₁₀(', 'Math.log10(', false, 'log10'),
  toggle: action('', '', false, 'toggle'),
  percent: action('', '', false, 'percent'),
  mr: action('', '', false, 'mr'),
  mPlus: action('', '', false, 'mPlus'),
  mMinus: action('', '', false, 'mMinus'),
  mc: action('', '', false, 'mc'),
  plug: action('#', '#', true, 'plug'),
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
    actions.plug,
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
  new Button('calculator__item hard-opirations', actions.plug, 'sin'),
  new Button('calculator__item hard-opirations', actions.plug, 'cos'),
  new Button('calculator__item hard-opirations', actions.plug, 'tan'),
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
