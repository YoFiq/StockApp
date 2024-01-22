import React, {useMemo} from 'react'
import {Route, Tab} from './route.ts'
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {IconProps, MagnifyingGlass, TrendUp} from 'phosphor-react-native'

import Stocks from '../pages/stocks/Stocks.tsx'
import Search from '../pages/search/Search.tsx'

const DEFAULT_ICON_PROPS = (focused: boolean): IconProps => {
  return {
    size: 30,
    weight: focused ? 'fill' : 'regular',
  }
}

const TabNavigator = () => {
  const options: BottomTabNavigationOptions = useMemo(
    () => ({
      tabBarActiveTintColor: '#0075FF',
      tabBarInactiveTintColor: '#8A8A8A',
      keyboardHidesTabBar: true,
    }),
    [],
  )

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        key={Route.STOCKS}
        name={Route.STOCKS}
        component={Stocks}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TrendUp {...DEFAULT_ICON_PROPS(focused)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        key={Route.SEARCH}
        name={Route.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MagnifyingGlass {...DEFAULT_ICON_PROPS(focused)} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
