import { bracketsAutoComplete } from '../Utils/bracketsAutoComplete'

export class CalculatorData {
  constructor() {
    this.visualValue = '0'
    this.hiddenValue = '0'
    this.hiddenValueForValidate = '0'
    this.operation = { symbol: '', operation: '', name: '' }
    this.lastResult = 0
    this.sqrt = false
    this.isError = false
    this.memory = 0
    this.isMemoryOn = false
    this.output = {
      resultVisible: false,
      showResult() {
        this.resultVisible = true
      },
      hideResult() {
        this.resultVisible = false
      },
    }
  }

  get result() {
    this.hiddenValueForValidate = this.hiddenValue

    const completedHiddenValue = bracketsAutoComplete(this.hiddenValue)

    try {
      const result2 = eval(this.hiddenValueForValidate)
      if (!Number.isFinite(result2) || Number.isNaN(result2)) {
        this.lastResult = 'Error!'
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
