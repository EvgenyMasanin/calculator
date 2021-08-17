/* eslint-disable no-undef */
import { actions } from './Actions/Actions'
import Calculator from './Calculator/Calculator'

const calculator = new Calculator()
describe('numbers', () => {
  test('numbers', () => {
    calculator.init(actions.one)
    calculator.addSymbol(actions.two)
    calculator.addSymbol(actions.three)
    calculator.addSymbol(actions.four)
    calculator.addSymbol(actions.five)
    calculator.addSymbol(actions.six)
    calculator.addSymbol(actions.seven)
    calculator.addSymbol(actions.eight)
    calculator.addSymbol(actions.nine)
    calculator.addSymbol(actions.zero)
    expect(calculator.result).toBe(1234567890)
  })
})

describe('operations', () => {
  beforeEach(() => {
    calculator.init(actions.five)
  })

  afterEach(() => {
    calculator.clear()
  })

  test('plus test', () => {
    calculator.addOperation(actions.plus)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(7)
  })

  test('minus test', () => {
    calculator.addOperation(actions.minus)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(3)
  })

  test('divide test', () => {
    calculator.addOperation(actions.divide)
    calculator.addSymbol(actions.five)
    expect(calculator.result).toBe(1)
  })

  test('multiply test', () => {
    calculator.addOperation(actions.multiply)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(10)
  })

  test('comma test', () => {
    calculator.addOperation(actions.comma)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(5.2)
  })

  test('sqrtY', () => {
    calculator.sqrt(actions.sqrtY)
    calculator.addSymbol(actions.five)
    expect(calculator.result).toBe(5 ** (1 / 5))
  })
  test('pow minus 1', () => {
    calculator.addOperation(actions.powM1)
    expect(calculator.result).toBe(1 / 5)
  })
  test('pow 2', () => {
    calculator.addOperation(actions.pow2)
    expect(calculator.result).toBe(5 ** 2)
  })
  test('pow 3', () => {
    calculator.addOperation(actions.pow3)
    expect(calculator.result).toBe(5 ** 3)
  })
  test('pow Y', () => {
    calculator.addOperation(actions.powY)
    calculator.addSymbol(actions.five)
    expect(calculator.result).toBe(5 ** 5)
  })
})

describe('passive operations', () => {
  beforeEach(() => {
    calculator.init(actions.five)
  })

  afterEach(() => {
    calculator.clear()
  })

  test('clear test', () => {
    calculator.addOperation(actions.minus)
    calculator.addSymbol(actions.two)
    calculator.clear(actions.clear)
    expect(calculator.result).toBe(0)
    expect(calculator.visualValue).toBe('0')
    expect(calculator.isError).toBe(false)
    expect(calculator.output.resultVisible).toBe(false)
    expect(calculator.clData.hiddenValue).toBe('0')
    expect(calculator.clData.sqrt).toBe(false)
    expect(calculator.clData.lastResult).toBe(0)
    expect(calculator.clData.operation).toMatchObject({
      symbol: '',
      operation: '',
      name: '',
    })
  })

  test('equals', () => {
    calculator.addOperation(actions.plus)
    calculator.addSymbol(actions.two)
    calculator.equals(actions.equals)
    expect(calculator.output.resultVisible).toBe(true)
  })

  test('toggle', () => {
    calculator.toggle(actions.toggle)
    expect(calculator.result).toBe(-5)
    calculator.toggle(actions.toggle)
    expect(calculator.result).toBe(5)
    calculator.addOperation(actions.plus)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(7)
    calculator.toggle(actions.toggle)
    expect(calculator.result).toBe(3)
  })

  test('percent', () => {
    calculator.percent(actions.percent)
    expect(calculator.result).toBe(0.05)
    calculator.percent(actions.percent)
    expect(calculator.result).toBe(0.0005)
    calculator.addOperation(actions.multiply)
    calculator.addSymbol(actions.one)
    calculator.addSymbol(actions.zero)
    calculator.addSymbol(actions.zero)
    calculator.addSymbol(actions.zero)
    calculator.addSymbol(actions.zero)
    calculator.equals(actions.equals)
    calculator.addOperation(actions.plus)
    calculator.addSymbol(actions.three)
    calculator.percent(actions.percent)
    expect(calculator.result).toBe(5.15)
    calculator.addOperation(actions.minus)
    calculator.addSymbol(actions.zero)
    calculator.addOperation(actions.comma)
    calculator.addSymbol(actions.one)
    calculator.addSymbol(actions.five)
    calculator.addOperation(actions.minus)
    calculator.addSymbol(actions.three)
    calculator.percent(actions.percent)
    expect(calculator.result).toBe(4.85)
    calculator.equals(actions.equals)
    calculator.addOperation(actions.multiply)
    calculator.addSymbol(actions.five)
    calculator.addSymbol(actions.zero)
    calculator.percent(actions.percent)
    expect(calculator.result).toBe(2.425)
    calculator.equals(actions.equals)
    calculator.addOperation(actions.divide)
    calculator.addSymbol(actions.five)
    calculator.addSymbol(actions.zero)
    calculator.percent(actions.percent)
    expect(calculator.result).toBe(4.85)
  })

  test('memory', () => {
    calculator.memoryAction(actions.mPlus)
    expect(calculator.clData.memory).toBe(5)
    calculator.init(actions.two)
    calculator.memoryAction(actions.mPlus)
    expect(calculator.clData.memory).toBe(7)
    calculator.init(actions.one)
    calculator.memoryAction(actions.mMinus)
    expect(calculator.clData.memory).toBe(6)
    calculator.memoryAction(actions.mc)
    expect(calculator.clData.memory).toBe(0)
  })
})

describe('math operations', () => {
  afterEach(() => {
    calculator.clear()
  })

  test('sqrt', () => {
    calculator.init(actions.sqrt2)
    calculator.addSymbol(actions.four)
    expect(calculator.result).toBe(2)
    calculator.clear(actions.clear)
    calculator.init(actions.two)
    calculator.result
    calculator.addOperation(actions.plus)
    calculator.addMathOperation(actions.sqrt2)
    calculator.addMathOperation(actions.openBracket)
    calculator.addSymbol(actions.two)
    calculator.addOperation(actions.plus)
    calculator.addSymbol(actions.two)
    calculator.result
    calculator.addMathOperation(actions.closeBracket)
    expect(calculator.result).toBe(4)
  })

  test('cbrt', () => {
    calculator.init(actions.cbrt3)
    calculator.addSymbol(actions.eight)
    expect(calculator.result).toBe(2)
  })

  test('sqrt y', () => {
    calculator.init(actions.one)
    calculator.addSymbol(actions.six)
    calculator.init(actions.sqrtY)
    calculator.addSymbol(actions.four)
    expect(calculator.result).toBe(2)
  })

  test('exp pow', () => {
    calculator.init(actions.expPow)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(Math.exp(2))
  })

  test('ln', () => {
    calculator.init(actions.ln)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(Math.log(2))
  })

  test('ln', () => {
    calculator.init(actions.log10)
    calculator.addSymbol(actions.two)
    expect(calculator.result).toBe(Math.log10(2))
  })
})
