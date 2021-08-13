import './styles/styles.css'
import { actions, HTMLButtons } from './buttons'
import { Calculator, CalculatorData } from './calculator'
import { InitCalculatorCommand } from './commands'

class CalculatorControler {
  constructor() {
    this.calculator = new Calculator()
  }

  addOperation(action) {
    console.log(this)
    if (this.calculator.isDivZero) {
      console.log('cleeeeeeeeeeeeeeeeeeeeeeeear')
      this.calculator.clear(actions[action])
    } else {
      switch (action) {
        case actions.toggle.name:
          this.calculator.toggle(actions[action])
          break
        case actions.mr.name:
        case actions.mc.name:
        case actions.mPlus.name:
        case actions.mMinus.name:
          this.calculator.memoryAction(actions[action])
          this.calculator.clear(actions[action])
          break
        case actions.percent.name:
          this.calculator.percent(actions[action])
          break
        case actions.equals.name:
          this.calculator.equals(actions[action])
          break
        case actions.clear.name:
          this.calculator.clear(actions[action])
          break
        default:
          if (this.calculator.visualValue === '0') {
            this.calculator.init(actions[action])
          } else {
            if (
              actions.sqrt2.name === action ||
              actions.sqrt3.name === action
            ) {
              this.calculator.sqrt(actions[action])
            } else if (actions[action].isOperation) {
              this.calculator.addOperation(actions[action])
            } else {
              this.calculator.addSymbol(actions[action])
            }
          }
          break
      }
    }
    expression.textContent = this.calculator.visualValue
    result.textContent = '= ' + this.calculator.result
  }
}

const calculatorControler = new CalculatorControler()
const calculatorBody = document.querySelector('.calculator__body')
HTMLButtons.forEach((HTMLButton) => {
  calculatorBody.append(HTMLButton)
})

calculatorBody.addEventListener('mousedown', (e) => {
  const action = e.target.dataset.type
  calculatorControler.addOperation(action)
})
