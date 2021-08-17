import {
  CleanCalculatorCommand,
  EqualsCalculatorCommand,
  InitCalculatorCommand,
  MathOperationCalculatorCommand,
  MemoryCalculatorCommand,
  OperationCalculatorCommand,
  PassiveOperationCalculatorCommand,
  PercentCalculatorCommand,
  SqrtCalculatorCommand,
  SwitchCalculatorCommand,
  SympleCalculatorCommand,
  ToggleCalculatorCommand,
} from '../Commands/CalculatorCommands'
import CalculatorData from './CalculatorData'

class Calculator {
  constructor() {
    this.clData = new CalculatorData()
  }

  get isMemoryOn() {
    return this.clData.isMemoryOn
  }

  get visualValue() {
    return this.clData.visualValue
  }

  get result() {
    return this.clData.result
  }

  get isError() {
    return this.clData.isError
  }

  get output() {
    return this.clData.output
  }

  init(action) {
    const initCommand = new InitCalculatorCommand(this.clData, action)
    initCommand.execute()
  }

  addSymbol(action) {
    const command = new SympleCalculatorCommand(this.clData, action)
    command.execute()
  }

  addOperation(action) {
    const command = new OperationCalculatorCommand(this.clData, action)
    command.execute()
  }

  addMathOperation(action) {
    const command = new MathOperationCalculatorCommand(this.clData, action)
    command.execute()
  }

  addPassiveOperation(action) {
    const command = new PassiveOperationCalculatorCommand(this.clData, action)
    command.execute()
  }

  equals(action) {
    const command = new EqualsCalculatorCommand(this.clData, action)
    command.execute()
  }

  sqrt(action) {
    const command = new SqrtCalculatorCommand(this.clData, action)
    command.execute()
  }

  toggle(action) {
    const command = new ToggleCalculatorCommand(this.clData, action)
    command.execute()
  }

  switch(action) {
    const command = new SwitchCalculatorCommand(this.clData, action)
    command.execute()
  }

  percent(action) {
    const command = new PercentCalculatorCommand(this.clData, action)
    command.execute()
  }

  memoryAction(action) {
    const command = new MemoryCalculatorCommand(this.clData, action)
    command.execute()
  }

  clear(action) {
    const command = new CleanCalculatorCommand(this.clData, action)
    command.execute()
  }
}

export default Calculator
