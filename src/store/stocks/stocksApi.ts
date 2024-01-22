import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {isEqual} from 'lodash'
import DtoStock from '../../types/stocks/DtoStock.ts'
import DtoStockResults from '../../types/stocks/DtoStocksResults.ts'

const API_BASE_URL = 'http://localhost:3000/stocks' as const

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    getStocks: builder.query<DtoStockResults, any>({
      query: ({_page = 1}) => {
        return {
          url: API_BASE_URL,
          params: {
            _page,
          },
        }
      },
      serializeQueryArgs: ({endpointName, queryArgs}) => {
        const serializedKey = `${endpointName}-${queryArgs}`
        return serializedKey
      },
      merge: (currentCacheData, responseData, {arg: {_page}}) => {
        console.log('currentCacheData', {_page, responseData, currentCacheData})
        if (_page > 1) {
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
  }),
})

export const {useGetStocksQuery} = stocksApi
