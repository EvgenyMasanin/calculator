import { actions, actionTypes } from '../Actions/Actions'
import bracketsAutoComplete from '../Utils/bracketsAutoComplete'
import Command from './Command'

export class InitCalculatorCommand extends Command {

  execute() {
    if (this.action.operation === actionTypes.passiveOperation) {
      return
    }
    if (
      this.action.name === actions.sqrt2.name ||
      this.action.name === actions.cbrt3.name ||
      this.action.name === actions.sqrtY.name
    ) {
      this.calculatorData.sqrt = true
    }

    if (this.action.name.indexOf('pow') >= 0) {
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue += this.action.mathSymbol
    } else if (this.action.operation === actionTypes.operation) {
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue += this.action.mathSymbol
    } else {
      this.calculatorData.visualValue = this.action.symbol
      this.calculatorData.hiddenValue = this.action.mathSymbol
    }
    this.calculatorData.operation = this.action
  }
}

export class SympleCalculatorCommand extends Command {

  execute() {
    this.calculatorData.visualValue += this.action.symbol
    if (this.calculatorData.operation.name === actions.equals.name) {
      this.calculatorData.visualValue = this.action.symbol
      this.calculatorData.hiddenValue = this.action.mathSymbol
      this.calculatorData.output.hideResult()
    } else {
      this.calculatorData.hiddenValue += this.action.mathSymbol
    }
    this.calculatorData.operation = this.action
  }
}

export class OperationCalculatorCommand extends Command {

  execute() {
    if (this.calculatorData.sqrt) {
      this.calculatorData.hiddenValue += ')'
      this.calculatorData.sqrt = false
    }
    if (this.calculatorData.operation.name === actions.equals.name) {
      this.calculatorData.visualValue = this.calculatorData.hiddenValue
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue += this.action.mathSymbol
      this.calculatorData.output.hideResult()
    } else if (this.calculatorData.operation.changeable) {
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
    } else {
      this.calculatorData.visualValue += this.action.symbol
      this.calculatorData.hiddenValue += this.action.mathSymbol
    }

    this.calculatorData.operation = this.action
  }
}

export class MathOperationCalculatorCommand extends Command {

  execute() {
    if (this.calculatorData.operation.name === actions.equals.name)
      this.calculatorData.output.hideResult()
    if (
      this.action.name === actions.sqrt2.name ||
      this.action.name === actions.cbrt3.name ||
      this.action.name === actions.sqrtY.name
    ) {
      this.calculatorData.sqrt = true
    }

    this.calculatorData.visualValue += this.action.symbol
    if (
      (this.calculatorData.operation.operation === actionTypes.number &&
        this.action.name !== actions.closeBracket.name) ||
      this.calculatorData.operation.name === actions.equals.name
    ) {
      this.calculatorData.hiddenValue += '*'
    }
    this.calculatorData.hiddenValue += this.action.mathSymbol
    this.calculatorData.operation = this.action

    if (this.action.name === actions.closeBracket.name) {
      this.calculatorData.hiddenValue += '*'
    }
    this.calculatorData.operation = this.action
  }
}

export class PassiveOperationCalculatorCommand extends Command {

  // execute() {
  // }
}

export class EqualsCalculatorCommand extends Command {

  execute() {
    if (this.calculatorData.result === 'Error!') {
      this.calculatorData.isError = true
    }
    if (this.calculatorData.sqrt) {
      this.calculatorData.hiddenValue += ')'
      this.calculatorData.sqrt = false
    }

    this.calculatorData.hiddenValue = bracketsAutoComplete(
      this.calculatorData.hiddenValue
    )

    this.calculatorData.output.showResult()
    this.calculatorData.hiddenValue = this.calculatorData.result.toString()
    this.calculatorData.operation = actions.equals
  }
}

export class SqrtCalculatorCommand extends Command {

  execute() {
    if (
      this.action.name === actions.sqrt2.name ||
      this.action.name === actions.cbrt3.name ||
      this.action.name === actions.sqrtY.name
    ) {
      this.calculatorData.sqrt = true
    }
    this.calculatorData.visualValue += this.action.symbol
    this.calculatorData.hiddenValue += this.action.mathSymbol
    // this.calculatorData.operation = this.action
  }
}

export class PercentCalculatorCommand extends Command {

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
    let isPercentFrom = true
    let numb = ''
    const isLastBraket = expression[expression.length - 1] === ')'
    if (isLastBraket) expression.splice(expression.length - 1, 1)
    let expressionReversed = expression.reverse()
    for (let i = 0; i < expressionReversed.length; i++) {
      if (
        !+expressionReversed[i] &&
        expressionReversed[i] !== '.' &&
        expressionReversed[i] !== '0'
      ) {
        if (expressionReversed[i] === '+' || expressionReversed[i] === '-')
          isPercentFrom = false
        break
      }
      numb += expressionReversed[i]
    }
    const { length } = numb
    const position = expressionReversed.length - 1 - length
    numb = numb.split('').reverse().join('')
    if (length) {
      expressionReversed = expressionReversed.reverse()
      if (isPercentFrom) {
        expressionReversed.splice(position + 1, length, numb / 100)
        expressionReversed = expressionReversed.join('')
        if (isLastBraket) expressionReversed += ')'
        return expressionReversed
      } 
        const hiddenValArr = expressionReversed
        numb = hiddenValArr.splice(position, length + 1)
        const hv = hiddenValArr.join('')
        this.calculatorData.hiddenValue = hv
        const percent =
          hv +
          numb[0] +
          (this.calculatorData.result * +numb.slice(1).join('')) / 100
        this.calculatorData.hiddenValue = expressionReversed
        return percent
      
    }
    return expression.reverse().join('')
  }
}

export class ToggleCalculatorCommand extends Command {

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
    this.calculatorData.isMemoryOn = true
  }

  execute() {
    switch (this.action.name) {
      case actions.mr.name:
        this.calculatorData.visualValue = this.calculatorData.memory.toString()
        this.calculatorData.hiddenValue = this.calculatorData.memory.toString()
        break
      case actions.mc.name:
        this.calculatorData.memory = 0
        this.calculatorData.isMemoryOn = false
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

export class SwitchCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
    this.items = Array.from(document.querySelectorAll('.switch'))
  }

  execute() {
    this.items.forEach((item) => {
      const itemContent = item.querySelector('.item__content')
      let { textContent } = itemContent
      if (itemContent.textContent.indexOf('arc') === 0) {
        textContent = textContent.split('')
        textContent.splice(0, 3)
        itemContent.textContent = textContent.join('')
      } else {
        itemContent.textContent = ['arc', ...textContent.split('')].join('')
      }
    })
  }
}
export class CleanCalculatorCommand extends Command {

  execute() {
    this.calculatorData.visualValue = '0'
    this.calculatorData.hiddenValue = '0'
    this.calculatorData.sqrt = false
    this.calculatorData.isError = false
    this.calculatorData.lastResult = 0
    this.calculatorData.operation = { symbol: '', operation: '', name: '' }
    this.calculatorData.output.hideResult()
  }
}
