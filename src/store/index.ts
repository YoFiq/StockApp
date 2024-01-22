import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {stocksApi} from './stocks/stocksApi.ts'

export const store = configureStore({
  reducer: {
    [stocksApi.reducerPath]: stocksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    // {serializableCheck: false,}
    getDefaultMiddleware().concat([stocksApi.middleware]),
})

setupListeners(store.dispatch)
