class Button {
  constructor(className, action, content) {
    this.className = className
    this.content = content
    this.dataAction = action
  }
}

export class Action {
  constructor(symbol, isOperation, name) {
    this.name = name
    this.symbol = symbol
    this.isOperation = isOperation
  }

  toString() {
    return this.name
  }
}

function action(symbol, isOperation, name) {
  return new Action(symbol, isOperation, name)
}

export const actions = {
  zero: action('0', false, 'zero'),
  one: action('1', false, 'one'),
  two: action('2', false, 'two'),
  three: action('3', false, 'three'),
  four: action('4', false, 'four'),
  five: action('5', false, 'five'),
  six: action('6', false, 'six'),
  seven: action('7', false, 'seven'),
  eight: action('8', false, 'eight'),
  nine: action('9', false, 'nine'),
  plus: action('+', true, 'plus'),
  minus: action('-', true, 'minus'),
  divide: action('/', true, 'divide'),
  miltiply: action('*', true, 'miltiply'),
  equals: action('=', true, 'equals'),
  comma: action('.', true, 'comma'),
  clear: action('', false, 'clear'),
  plug: action('#', true, 'plug'),
}

const buttons = [
  new Button('calculator__item hard-opirations', actions.plug, '('),
  new Button('calculator__item hard-opirations', actions.plug, ')'),
  new Button('calculator__item hard-opirations', actions.plug, 'mc'),
  new Button('calculator__item hard-opirations', actions.plug, 'm+'),
  new Button('calculator__item  hard-opirations', actions.plug, 'm-'),
  new Button('calculator__item  hard-opirations', actions.plug, 'mr'),
  new Button('calculator__item  hard-opirations', actions.clear, 'AC'),
  new Button('calculator__item  hard-opirations', actions.plug, '±'),
  new Button('calculator__item  hard-opirations', actions.plug, '%'),
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
    actions.plug,
    'x<sup>2</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
    'x<sup>3</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
    'x<sup>y</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
    'e<sup>x</sup>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
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
    actions.plug,
    '<sup>1</sup>/<sub>x</sub>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
    '<sup>2</sup><i class="fas fa-square-root-alt"></i>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
    '<sup>3</sup><i class="fas fa-square-root-alt"></i>'
  ),
  new Button(
    'calculator__item  hard-opirations',
    actions.plug,
    '<sup>y</sup><i class="fas fa-square-root-alt" ></i>'
  ),
  new Button('calculator__item hard-opirations', actions.plug, 'ln'),
  new Button(
    'calculator__item hard-opirations',
    actions.plug,
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
