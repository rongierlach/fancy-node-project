import { reject, isNil } from 'ramda'
import makeRule from 'webpack-make-rule'

// https://lodash.com/docs/4.17.3#compact
const compact = reject(isNil)

// http://stackoverflow.com/questions/13218745/convert-complex-javascript-object-to-dot-notation-object
const dotize = (obj, prefix = '', result = {}) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value === Object(value)) // eslint-disable-line
      dotize(value, prefix + key + '.', result)
    else                         // eslint-disable-line
      result[prefix + key] = value
  })
  return result
}

// https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const validateEmail = value =>
  emailRegex.test(value)

export {
  dotize,
  compact,
  makeRule,
  emailRegex,
  validateEmail
}
