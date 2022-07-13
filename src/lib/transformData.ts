import { NumberString } from '../types/types'

const isObject = function (object: object) {
  return (
    object === Object(object) &&
    !Array.isArray(object) &&
    typeof object !== 'function'
  )
}

const toCamel = (string: string) =>
  string.replace(/([-_][a-z])/gi, substring =>
    substring.toUpperCase().replace('-', '').replace('_', '')
  )

const toSnake = (string: string) =>
  string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

export const keysToCamel = (object: any) => {
  if (isObject(object)) {
    const n = {}

    Object.keys(object).forEach(k => {
      n[toCamel(k)] = keysToCamel(object[k])
    })

    return n
  } else if (Array.isArray(object)) {
    return object.map(i => {
      return keysToCamel(i)
    })
  }

  return object
}

export const keysToSnake = (object: any) => {
  if (isObject(object)) {
    const n = {}

    Object.keys(object).forEach(k => {
      n[toSnake(k)] = keysToSnake(object[k])
    })

    return n
  } else if (Array.isArray(object)) {
    return object.map(i => {
      return keysToSnake(i)
    })
  }

  return object
}

const isNumberString = (
  value: number | null | string | boolean
): value is NumberString => typeof value === 'string' && !isNaN(+value)

export const reviver = (_: string, value: number | null | string | boolean) => {
  if (isNumberString(value)) return BigInt(value)
  if (value === 'true' || value === 'false') return value === 'true'
  return value
}

export const replacer = (
  _: string,
  value: number | null | string | boolean
) => {
  if (typeof value === 'number') return value.toString()
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  return value
}
