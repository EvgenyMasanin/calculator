import { bracketsAutoComplete } from '../Utils/bracketsAutoComplete'

export class CalculatorData {
  constructor() {
    this.visualValue = '0'
    this.hiddenValue = '0'
    this.hiddenValueForValidate = '0'
    this.operation = { symbol: '', isOperation: false, name: '' }
    this.lastResult = 0
    this.sqrt = false
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
    this.hiddenValueForValidate = this.hiddenValue

    const completedHiddenValue = bracketsAutoComplete(this.hiddenValue)

    console.log(completedHiddenValue)
    try {
      let result2 = eval(this.hiddenValueForValidate)
      console.log(result2)
      if (!Number.isFinite(result2) || Number.isNaN(result2)) {
        console.log('err', completedHiddenValue)
        this.lastResult = `Error!`
        return this.lastResult
      }
    } catch (error) {}

    try {
      let result = eval(completedHiddenValue)
      if (Number.isNaN(result)) {
        throw new Error()
      }
      if (!Number.isFinite(result)) result = 'Error!'
      this.lastResult = result
      return this.lastResult
    } catch (error) {
      return this.lastResult
    }
  }
}
