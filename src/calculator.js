import {
  CleanCalculatorCommand,
  EqualsCalculatorCommand,
  InitCalculatorCommand,
  MemoryCalculatorCommand,
  OperationCalculatorCommand,
  PercentCalculatorCommand,
  SqrtCalculatorCommand,
  SympleCalculatorCommand,
  ToggleCalculatorCommand,
} from './commands'

export class Calculator {
  constructor() {
    this.value = 0
    this.visualValue = '0'
    this.result = '0'
    this.clData = new CalculatorData()
    window.calc = this.clData
  }

  init(action) {
    console.log(action)
    const initCommand = new InitCalculatorCommand(this.clData, action)
    initCommand.execute()
    console.log(action)
    this.#setValues()
  }

  addSymbol(action) {
    const command = new SympleCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  addOperation(action) {
    const command = new OperationCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  equals(action) {
    const command = new EqualsCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  sqrt(action) {
    const command = new SqrtCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  toggle(action) {
    const command = new ToggleCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  percent(action) {
    const command = new PercentCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  memoryAction(action) {
    const command = new MemoryCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }

  clear(action) {
    const command = new CleanCalculatorCommand(this.clData, action)
    command.execute()
    this.#setValues()
  }
  #setValues() {
    this.visualValue = this.clData.visualValue
    this.result = this.clData.result
    this.isDivZero = this.clData.isDivZero
  }
}

class CalculatorData {
  constructor() {
    this.visualValue = '0'
    this.hiddenValue = '0'
    this.operation = { symbol: '', isOperation: false, name: '' }
    this.lastResult = 0
    this.sqrt = 0
    this.isDivZero = false
    this.memory = 0
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
    try {
      this.lastResult = eval(this.hiddenValue)
      if (!Number.isFinite(this.lastResult))
        this.lastResult = `You can't divide it by zero!!!`
      return this.lastResult
    } catch (error) {
      return this.lastResult
    }
  }
}
