import { actions } from './buttons'

class Command {
  constructor(calculatorData, action) {
    this.calculatorData = calculatorData
    this.action = action
  }
}

export class InitCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    if (this.action.isOperation) {
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.operation = this.action
    } else {
      this.calculatorData.visualValue = this.action.symbol
      this.calculatorData.hiddenValue = this.action.symbol
    }
  }
}

export class SympleCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    this.calculatorData.visualValue += this.action.symbol
    if (this.calculatorData.operation.name === actions.equals.name) {
      this.calculatorData.visualValue = this.action.symbol
      this.calculatorData.hiddenValue = this.action.symbol
      this.calculatorData.operation = { symbol: '', isOperation: false }
      this.calculatorData.output.hideResult()
    } else {
      this.calculatorData.hiddenValue += this.calculatorData.operation.symbol
      this.calculatorData.hiddenValue += this.action.symbol
      this.calculatorData.operation = { symbol: '', isOperation: false }
    }
  }
}

export class OperationCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    if (this.calculatorData.operation.name === actions.equals.name) {
      this.calculatorData.visualValue = this.calculatorData.hiddenValue
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.output.hideResult()
    }
    if (this.calculatorData.operation.symbol === '') {
      this.calculatorData.visualValue += this.action.symbol
    } else if (this.calculatorData.operation.name !== this.action.name) {
      this.calculatorData.visualValue = this.calculatorData.visualValue.slice(
        0,
        this.calculatorData.visualValue.length - 1
      )
      this.calculatorData.visualValue += this.action.symbol
    }
    this.calculatorData.operation = this.action
  }
}

export class EqualsCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    this.calculatorData.output.showResult()
    this.calculatorData.hiddenValue = this.calculatorData.result
    this.calculatorData.operation = this.action
  }
}

export class CleanCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    this.calculatorData.visualValue = '0'
    this.calculatorData.hiddenValue = '0'
    this.calculatorData.operation = { symbol: '', isOperation: false, name: '' }
    this.calculatorData.output.hideResult()
    console.log(this.calculatorData)
  }
}
