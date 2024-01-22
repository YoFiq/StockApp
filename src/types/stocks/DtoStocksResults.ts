import DtoStock from './DtoStock.ts'
import EntityResults from '../EntityResults.ts'

type DtoStockResults = EntityResults<DtoStock> & {canLoadMore: boolean}

export default DtoStockResults
