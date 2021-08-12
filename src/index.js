import './styles/styles.css'
import { actions, HTMLButtons } from './buttons'
import { Calculator, CalculatorData } from './calculator'
import { InitCalculatorCommand } from './commands'

class CalculatorControler {
  constructor() {
    this.calculator = new Calculator()
  }

  addOperation(action) {
    switch (action) {
      case actions.equals.name:
        this.calculator.equals(actions[action])
        break
      case actions.clear.name:
        this.calculator.clear()
        break
      default:
        if (this.calculator.visualValue === '0') {
          this.calculator.init(actions[action])
        } else {
          if (actions[action].isOperation) {
            this.calculator.addOperation(actions[action])
          } else {
            this.calculator.addSymbol(actions[action])
          }
        }
        break
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
