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

const transformObjectKeys = (
  object: Record<string, any>,
  transformer: (key: string) => string
): any => {
  if (isObject(object)) {
    const newObject: Record<string, any> = {}

    Object.keys(object).forEach(key => {
      newObject[transformer(key)] = transformObjectKeys(
        object[key],
        transformer
      )
    })

    return newObject
  } else if (Array.isArray(object)) {
    return object.map(item => transformObjectKeys(item, transformer))
  }

  return object
}

export const keysToCamel = (object: Record<string, any>) =>
  transformObjectKeys(object, toCamel)

export const keysToSnake = (object: Record<string, any>) =>
  transformObjectKeys(object, toSnake)

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
