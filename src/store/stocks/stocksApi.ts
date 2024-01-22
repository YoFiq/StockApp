import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {isEqual} from 'lodash'
import DtoStockResults from '../../types/stocks/DtoStocksResults.ts'
import StocksQueryParams from '../../types/stocks/StocksQueryParams.ts'
import {isValueIncludedInEnum} from '../../pages/search/utils.ts'

const API_BASE_URL = 'http://localhost:3000/stocks' as const

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    getStocks: builder.query<DtoStockResults, StocksQueryParams>({
      query: ({_page = 1}) => {
        return {
          url: API_BASE_URL,
          params: {
            _page,
            _sort: 'market', //TODO needs to be added second sorting param
          },
        }
      },
      serializeQueryArgs: ({endpointName, queryArgs}) => {
        const serializedKey = `${endpointName}-${queryArgs}`
        return serializedKey
      },
      merge: (currentCacheData, responseData, {arg: {_page}}) => {
        if (_page! > 1) {
          currentCacheData.prev = responseData.prev
          currentCacheData.next = responseData.next
          currentCacheData.data.push(...responseData.data)
        } else {
          currentCacheData = responseData
        }
      },
      forceRefetch({currentArg, previousArg}) {
        return !isEqual(currentArg, previousArg)
      },
    }),

    //TODO needs to be added pagination for searched values and add 2nd param for sorting
    searchStocks: builder.query<DtoStockResults, StocksQueryParams>({
      query: ({search}) => {
        const searchBy = isValueIncludedInEnum(search)

        // TODO needs to
        return {
          url: API_BASE_URL,
          params: {
            'i.type': searchBy ? searchBy : undefined,
            'i.name': searchBy ? undefined : search,
            _sort: 'market',
          },
        }
      },
    }),
  }),
})

export const {useGetStocksQuery, useSearchStocksQuery} = stocksApi
