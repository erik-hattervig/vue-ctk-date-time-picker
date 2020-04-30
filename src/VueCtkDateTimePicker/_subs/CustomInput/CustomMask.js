import IMask from 'imask/esm/imask'
import 'imask/esm/masked/range'
import 'imask/esm/masked/enum'
import 'imask/esm/masked/dynamic'
import MaskedPattern from 'imask/esm/masked/pattern'

/* eslint-disable */

class MaskedSelects extends MaskedPattern {
  /**
    @override
    @param {Object} opts
  */
  _update (opts) {
    if (opts.selects) {
      opts.mask = '*'.repeat(Math.min(...opts.selects.map(({length}) => length )))
    }
    super._update(opts)
  }

  doCommit(value) {
    console.log('doCommit', value)
    super.doCommit(value)
  }

  /**
    @override
  */
  doValidate (...args) {
    console.log('DO VALIDATE', { value: this.unmaskedValue})
    var valid = this.selects.some(s => s.startsWith(this.unmaskedValue)) &&
      super.doValidate(...args);
    if ( valid ) {
      var value = this.unmaskedValue
      console.log('Valid')
      var validSelects = this.selects.filter(s => s.startsWith(this.unmaskedValue))
      console.log({validSelects, min: Math.min(...validSelects.map(({length}) => length )) })
      let newOptions = {
        mask: '*'.repeat(Math.min(...validSelects.map(({length}) => length )))
      }
      console.log({newOptions})
      this.updateOptions(newOptions);
      console.log('this.mask ', this.mask)
      this.updateValue(this.unmaskedValue)
    }
    return valid
  }
}
IMask.MaskedSelects = MaskedSelects