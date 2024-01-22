import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {COLORS} from '../../../constants/colors.ts'
import {MagnifyingGlass} from 'phosphor-react-native'

interface Props {
  onSearchValueChange: (_text: string) => void
}

const SearchBar = ({onSearchValueChange}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MagnifyingGlass color={COLORS.white} size={20} />
      </View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.white}
        style={styles.input}
        onChangeText={onSearchValueChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grayDark,
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    width: '10%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    fontSize: 15,
    color: COLORS.white,
    width: '90%',
  },
})

export default SearchBar
