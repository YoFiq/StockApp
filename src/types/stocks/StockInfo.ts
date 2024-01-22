import {EStockType} from './StockType.ts'
import IStockPrice from './StockPrice.ts'

export default interface IStockInfo {
  name: string
  type: EStockType
  price: IStockPrice
  lotSize: number
  currency: string
}
