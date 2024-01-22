import React, {useCallback, useState} from 'react'
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'
import {useGetStocksQuery} from '../../store/stocks/stocksApi.ts'
import DtoStock from '../../types/stocks/DtoStock.ts'

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
    setPage(prevPage => prevPage + 1)
  }, [isLoading, isFetching, setPage])

  return isLoading ? (
    <ActivityIndicator size={32} />
  ) : (
    <FlatList
      data={data ? data.data : []}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View>
          <Text style={styles.text}>{item.i.name}</Text>
        </View>
      )}
      onEndReached={handleEndReached}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    color: 'white',
  },
})

export default Stocks
