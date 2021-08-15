import { actions } from '../buttons'
import { Command } from './Command'

export class InitCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    console.log('INIT')
    if (
      this.action.name === actions.sqrt2.name ||
      this.action.name === actions.sqrt3.name ||
      this.action.name === actions.sqrtY.name
    ) {
      this.calculatorData.sqrt = true
    }

    if (this.action.name.indexOf('pow') >= 0) {
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue += this.action.mathSymbol
    } else if (this.action.isOperation && this.action.name) {
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue += this.action.mathSymbol
      this.calculatorData.operation = this.action
    } else {
      this.calculatorData.visualValue = this.action.symbol
      this.calculatorData.hiddenValue = this.action.mathSymbol
    }
  }
}

export class SympleCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    console.log('SIMPLE')
    this.calculatorData.visualValue += this.action.symbol
    if (this.calculatorData.operation.name === actions.equals.name) {
      this.calculatorData.visualValue = this.action.symbol
      this.calculatorData.hiddenValue = this.action.mathSymbol
      this.calculatorData.operation = {
        symbol: '',
        isOperation: false,
        name: '',
      }
      this.calculatorData.output.hideResult()
    } else {
      this.calculatorData.hiddenValue += this.action.mathSymbol
      this.calculatorData.operation = {
        symbol: '',
        isOperation: false,
        name: '',
      }
    }
  }
}

export class OperationCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    console.log('OPERATION')
    if (this.calculatorData.sqrt) {
      console.log(222)
      this.calculatorData.hiddenValue += `)`
      this.calculatorData.sqrt = false
    }
    switch (this.calculatorData.operation.name) {
      case actions.equals.name:
        this.calculatorData.visualValue = this.calculatorData.hiddenValue
        this.calculatorData.visualValue += this.action.symbol
        this.calculatorData.hiddenValue += this.action.mathSymbol
        this.calculatorData.output.hideResult()
        break
      case '':
        this.calculatorData.visualValue += this.action.symbol
        this.calculatorData.hiddenValue += this.action.mathSymbol
        break
    }
    if (this.calculatorData.operation.changeable) {
      this.calculatorData.visualValue = this.calculatorData.visualValue.slice(
        0,
        this.calculatorData.visualValue.length - 1
      )
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue = this.calculatorData.hiddenValue.slice(
        0,
        this.calculatorData.hiddenValue.length - 1
      )
      this.calculatorData.hiddenValue += this.action.mathSymbol
    }

    this.calculatorData.operation = this.action
    console.log(this.calculatorData.hiddenValue)
  }
}

export class EqualsCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    if (this.calculatorData.result === `You can't divide it by zero!!!`) {
      this.calculatorData.isDivZero = true
    }
    if (this.calculatorData.sqrt) {
      this.calculatorData.hiddenValue += `)`
      this.calculatorData.sqrt = false
    }

    const brakets = this.calculatorData.hiddenValue.split('').reduce(
      (brakets, symbol) => {
        if (symbol === '(') brakets.open++
        else if (symbol === ')') brakets.close++
        return brakets
      },
      { open: 0, close: 0 }
    )
    console.log(brakets)
    if (brakets.open > brakets.close) {
      this.calculatorData.hiddenValue += ')'.repeat(
        brakets.open - brakets.close
      )
    }

    this.calculatorData.output.showResult()
    this.calculatorData.hiddenValue = this.calculatorData.result.toString()
    this.calculatorData.operation = this.action
  }
}

export class SqrtCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    if (
      this.action.name === actions.sqrt2.name ||
      this.action.name === actions.sqrt3.name ||
      this.action.name === actions.sqrtY.name
    ) {
      this.calculatorData.sqrt = true
    }
    console.log(this.action)
    this.calculatorData.visualValue += this.action.symbol
    this.calculatorData.hiddenValue += this.action.mathSymbol
    this.calculatorData.operation = {
      symbol: '',
      isOperation: false,
      name: '',
    }
  }
}

export class PercentCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    const newHiddenValue = this.modify(
      this.calculatorData.hiddenValue.split('')
    )
    const newVisualValue = this.modify(
      this.calculatorData.visualValue.split('')
    )

    this.calculatorData.visualValue = newVisualValue
    this.calculatorData.hiddenValue = newHiddenValue
  }

  modify(expression) {
    let numb = ''
    let isLastBraket = expression[expression.length - 1] === ')'
    if (isLastBraket) expression.splice(expression.length - 1, 1)
    let expressionReversed = expression.reverse()
    for (let i = 0; i < expressionReversed.length; i++) {
      if (
        !+expressionReversed[i] &&
        expressionReversed[i] !== '.' &&
        expressionReversed[i] !== '0'
      )
        break
      numb += expressionReversed[i]
    }
    let length = numb.length
    let position = expressionReversed.length - 1 - length
    numb = numb.split('').reverse().join('')
    console.log(numb, length, position)
    if (length) {
      expressionReversed = expressionReversed.reverse()
      expressionReversed.splice(position + 1, length, numb / 100)
      expressionReversed = expressionReversed.join('')
      if (isLastBraket) expressionReversed += ')'
      console.log(expressionReversed)
      return expressionReversed
    }
    return expression.reverse().join('')
  }
}
export class ToggleCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    const newHiddenValue = this.modify(
      this.calculatorData.hiddenValue.split('')
    )
    const newVisualValue = this.modify(
      this.calculatorData.visualValue.split('')
    )
    this.calculatorData.hiddenValue = newHiddenValue.join('')
    this.calculatorData.visualValue = newVisualValue.join('')
  }

  modify(expression) {
    let indexOfSign
    expression.forEach((elem, ind) => {
      if (!+elem && elem !== '.' && elem !== '0') {
        indexOfSign = ind
      }
    })

    switch (expression[indexOfSign]) {
      case '+':
        expression.splice(indexOfSign, 1, '-')
        break
      case '-':
        indexOfSign === 0
          ? expression.splice(indexOfSign, 1)
          : expression.splice(indexOfSign, 1, '+')
        break

      default:
        expression.splice(indexOfSign + 1, 0, '-')
        break
    }
    return expression
  }
}

export class MemoryCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    switch (this.action.name) {
      case actions.mr.name:
        alert(this.calculatorData.memory)
        break
      case actions.mc.name:
        this.calculatorData.memory = 0
        break
      case actions.mPlus.name:
        this.calculatorData.memory += this.calculatorData.result
        break
      case actions.mMinus.name:
        this.calculatorData.memory -= this.calculatorData.result
        break
    }
  }
}

export class CleanCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    this.calculatorData.visualValue = '0'
    this.calculatorData.hiddenValue = '0'
    this.calculatorData.sqrt = false
    this.calculatorData.isDivZero = false
    this.calculatorData.operation = { symbol: '', isOperation: false, name: '' }
    this.calculatorData.output.hideResult()
    console.log(this.calculatorData)
  }
}
