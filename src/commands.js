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
    if (this.action.isOperation && this.action.name) {
      this.calculatorData.visualValue += this.action.symbol
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
    if (this.calculatorData.sqrt) {
      console.log()
      this.calculatorData.hiddenValue += `)`
      this.calculatorData.sqrt = 0
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
      console.log('fdwjehgurbwfejjwurwhjhcwbekljdjiowehfkhwrjbhkwejndjwhefjb')
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
      this.calculatorData.sqrt = 0
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
    this.calculatorData.hiddenValue = this.calculatorData.result
    this.calculatorData.operation = this.action
  }
}

export class SqrtCalculatorCommand extends Command {
  constructor(calculatorData, action) {
    super(calculatorData, action)
  }

  execute() {
    switch (this.action) {
      case actions.sqrt2:
        this.calculatorData.sqrt = 2

        break
      case actions.sqrt3:
        this.calculatorData.sqrt = 3
        break
      case actions.sqrtY:
        this.calculatorData.isSqrt = y
        break
      default:
        break
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

    this.calculatorData.visualValue = newHiddenValue
    this.calculatorData.hiddenValue = newVisualValue
  }

  modify(expression) {
    let numb = ''
    let isLastBraket = expression[expression.length - 1] === ')'
    if (isLastBraket) expression.splice(expression.length - 1, 1)
    expression = expression.reverse()
    for (let i = 0; i < expression.length; i++) {
      if (!+expression[i] && expression[i] !== '.' && expression[i] !== '0')
        break
      numb += expression[i]
    }
    let length = numb.length
    let position = expression.length - 1 - length
    numb = numb.split('').reverse().join('')

    expression = expression.reverse()
    expression.splice(position + 1, length, numb / 100)
    expression = expression.join('')
    if (isLastBraket) expression += ')'
    console.log(expression)
    return expression
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
        expression.splice(indexOfSign, 1, '+')
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
    this.calculatorData.sqrt = 0
    this.calculatorData.isDivZero = false
    this.calculatorData.operation = { symbol: '', isOperation: false, name: '' }
    this.calculatorData.output.hideResult()
    console.log(this.calculatorData)
  }
}
