import { actions } from "./Actions/Actions"

class Button {
  constructor(className, action, content) {
    this.className = className
    this.content = content
    this.dataAction = action
  }
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
    actions.multiply,
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
    actions.cbrt3,
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
