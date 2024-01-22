import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Stocks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stocks page</Text>
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

export default Stocks
