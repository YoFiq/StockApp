import Entity from '../Entity.ts'
import IStockInfo from './StockInfo.ts'

export default interface DtoStock extends Entity {
  market: string
  i: IStockInfo
}
