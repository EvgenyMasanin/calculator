import './styles/styles.css'
import { HTMLButtons } from './buttons'
import { Calculator } from './Calculator/Calculator'
import { actions, actionTypes } from './Actions/Actions'

class CalculatorControler {
  constructor() {
    this.calculator = new Calculator()
    this.resultField = document.querySelector('#result')
    this.expressionField = document.querySelector('#expression')
    this.memorySymbol = document.querySelector('.memory')
    this.expressionField.textContent = this.calculator.visualValue
    this.resultField.textContent = '= 0'
  }

  addOperation(action) {
    if (this.calculator.isError) {
      this.calculator.clear(actions[action])
    } else if (action === actions.switch.name) {
      this.calculator.switch(actions[action])
    } else if (this.calculator.visualValue === '0') {
      this.calculator.init(actions[action])
    } else {
      switch (actions[action].operation) {
        case actionTypes.number:
          this.calculator.addSymbol(actions[action])
          break
        case actionTypes.operation:
          this.calculator.addOperation(actions[action])
          break
        case actionTypes.mathOperation:
          this.calculator.addMathOperation(actions[action])
          break
        default: {
          switch (action) {
            case actions.toggle.name:
              this.calculator.toggle(actions[action])
              break
            case actions.mr.name:
              console.log('read')
              this.calculator.memoryAction(actions[action])
              this.calculator.equals(actions.equals)
              break
            case actions.mc.name:
            case actions.mPlus.name:
            case actions.mMinus.name:
              this.calculator.memoryAction(actions[action])
              this.calculator.equals(actions[action])
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
          }
          break
        }
      }
    }
    this.resultField.textContent = `= ${this.calculator.result}`
    this.expressionField.textContent = this.calculator.visualValue
    if (this.calculator.output.resultVisible) {
      this.resultField.classList.remove('disable')
      this.expressionField.classList.add('disable')
    } else {
      this.resultField.classList.add('disable')
      this.expressionField.classList.remove('disable')
    }

    if (this.calculator.isMemoryOn) {
      this.memorySymbol.classList.add('memory-active')
      this.memorySymbol.textContent = `M ${this.calculator.clData.memory}`
    } else {
      this.memorySymbol.classList.remove('memory-active')
    }
    console.log(this.calculator.clData)
  }
}

const calculatorControler = new CalculatorControler()

const calculatorBody = document.querySelector('.calculator__body')
HTMLButtons.forEach((HTMLButton) => {
  calculatorBody.append(HTMLButton)
})

calculatorBody.addEventListener('mousedown', (e) => {
  const action = e.target.dataset.type
  if (action) calculatorControler.addOperation(action)
})
