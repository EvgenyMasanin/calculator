import {
  CleanCalculatorCommand,
  EqualsCalculatorCommand,
  InitCalculatorCommand,
  OperationCalculatorCommand,
  SympleCalculatorCommand,
} from './commands'

export class Calculator {
  constructor() {
    this.value = 0
    this.visualValue = '0'
    this.result = '0'
    this.clData = new CalculatorData()
  }

  init(action) {
    console.log(action)
    const initCommand = new InitCalculatorCommand(this.clData, action)
    initCommand.execute()
    console.log(action)
    this.visualValue = this.clData.visualValue
    this.result = this.clData.result
    console.log('result', this.clData.result)
    console.log('hiddenValue', this.clData.hiddenValue)
  }

  addSymbol(action) {
    const command = new SympleCalculatorCommand(this.clData, action)
    command.execute()
    this.visualValue = this.clData.visualValue
    this.result = this.clData.result
    console.log('result', this.clData.result)
    console.log('hiddenValue', this.clData.hiddenValue)
  }

  addOperation(action) {
    const command = new OperationCalculatorCommand(this.clData, action)
    command.execute()
    this.visualValue = this.clData.visualValue
    this.result = this.clData.result
    console.log('result', this.clData.result)
    console.log('hiddenValue', this.clData.hiddenValue)
  }

  equals(action) {
    const command = new EqualsCalculatorCommand(this.clData, action)
    command.execute()
  }

  sqrt(action) {
    
  }

  clear(action) {
    const command = new CleanCalculatorCommand(this.clData, action)
    command.execute()
    this.visualValue = this.clData.visualValue
    this.result = this.clData.result
    console.log(this)
  }
}

class CalculatorData {
  constructor() {
    this.visualValue = '0'
    this.hiddenValue = '0'
    this.operation = { symbol: '', isOperation: false, name: '' }
    this.output = {
      resultField: document.querySelector('#result'),
      expressionField: document.querySelector('#expression'),
      showResult() {
        this.resultField.classList.remove('disable')
        this.expressionField.classList.add('disable')
      },
      hideResult() {
        this.resultField.classList.add('disable')
        this.expressionField.classList.remove('disable')
      },
    }
    this.output.expressionField.textContent = this.visualValue
    this.output.resultField.textContent = '= 0'
  }

  get result() {
    console.log(this.hiddenValue)
    return this.hiddenValue === '0' ? 0 : eval(this.hiddenValue)
  }
}
