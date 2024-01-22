import React, {useCallback, useState} from 'react'
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native'
import {useGetStocksQuery} from '../../store/stocks/stocksApi.ts'
import StockCard from '../../components/StockCard.tsx'

const Stocks = () => {
  const [page, setPage] = useState(1)
  const {data, isLoading, isFetching, error} = useGetStocksQuery(
    {
      _page: page,
    },
    {refetchOnMountOrArgChange: true},
  )

  console.log('VIEW', {data, error})

  const handleEndReached = useCallback(() => {
    if (isLoading || isFetching) {
      return
    }
    setPage(data.next)
  }, [isLoading, isFetching, setPage, data])

  return isLoading ? (
    <ActivityIndicator size={32} />
  ) : (
    <FlatList
      data={data ? data.data : []}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <StockCard stock={item} />}
      onEndReached={handleEndReached}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})

export default Stocks
