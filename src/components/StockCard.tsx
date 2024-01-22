import React, {useMemo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import DtoStock from '../types/stocks/DtoStock.ts'
import {COLORS} from '../constants/colors.ts'

type Props = {
  stock: DtoStock
}

const StockCard = ({stock}: Props) => {
  const {
    market,
    i: {
      name,
      type,
      lotSize,
      price: {lastTradedPrevious},
    },
  } = stock

  const title = useMemo(
    () => `${name} (${type}) - ${market}`,
    [market, name, type],
  )

  const price = useMemo(
    () => Number(((lastTradedPrevious * lotSize) / 100).toFixed(2)),
    [lotSize, lastTradedPrevious],
  )

  const priceBackgroundColor = useMemo(() => {
    if (price < lastTradedPrevious) {
      return {backgroundColor: COLORS.red}
    }
    if (price === lastTradedPrevious) {
      return {backgroundColor: COLORS.gray}
    }
    return {backgroundColor: COLORS.green}
  }, [price, lastTradedPrevious])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={[styles.priceContainer, priceBackgroundColor]}>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  priceContainer: {
    width: 80,
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
  },
})

export default StockCard
