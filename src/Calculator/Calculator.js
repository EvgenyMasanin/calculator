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
} from '../Commands/CalculatorCommands'
import { CalculatorData } from './CalculatorData'

export class Calculator {
  constructor() {
    this.clData = new CalculatorData()
    window.calc = this.clData
  }

  get visualValue() {
    return this.clData.visualValue
  }

  get result() {
    return this.clData.result
  }

  get isDivZero() {
    return this.clData.isDivZero
  }

  init(action) {
    console.log(action)
    const initCommand = new InitCalculatorCommand(this.clData, action)
    initCommand.execute()
    console.log(action)
  }

  addSymbol(action) {
    const command = new SympleCalculatorCommand(this.clData, action)
    command.execute()
  }

  addOperation(action) {
    const command = new OperationCalculatorCommand(this.clData, action)
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
