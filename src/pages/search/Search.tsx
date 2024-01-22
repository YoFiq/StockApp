import React, {useState} from 'react'
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native'
import {useSearchStocksQuery} from '../../store/stocks/stocksApi.ts'
import StockCard from '../../components/StockCard.tsx'
import SearchBar from './components/SearchBar.tsx'
import {debounce} from 'lodash'

const Search = () => {
  const [search, setSearch] = useState('')
  const {data, isLoading} = useSearchStocksQuery(
    {
      search,
    },
    {refetchOnMountOrArgChange: true, skip: !search},
  )

  //TODO as we have a bit different query, without pagination we need to add proper types
  const stocks = data?.length ? data : []

  const handleOnSearchChange = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 600)

  return isLoading ? (
    <ActivityIndicator size={32} />
  ) : (
    <>
      <SearchBar onSearchValueChange={handleOnSearchChange} />
      <FlatList
        data={stocks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <StockCard stock={item} />}
        contentContainerStyle={styles.container}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})

export default Search
