import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search page</Text>
    </View>
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

export default Search
