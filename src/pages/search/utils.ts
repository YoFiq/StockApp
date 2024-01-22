import {EStockType} from '../../types/stocks/StockType.ts'

export function isValueIncludedInEnum(inputValue?: string) {
  if (!inputValue) {
    return null
  }
  // Convert the input value to upper case for case-insensitive comparison
  const upperInputValue = inputValue.toUpperCase()

  // Check if any enum value includes the input
  const enumValues = Object.values(EStockType)
  for (const enumValue of enumValues) {
    if (enumValue === upperInputValue) {
      return enumValue
    }
  }
  return null
}
