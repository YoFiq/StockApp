import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

export enum Route {
  STOCKS = 'Stocks',
  SEARCH = 'Search',
}

export type RouteParamList = {
  [Route.STOCKS]: undefined
  [Route.SEARCH]: undefined
}

export const Tab = createBottomTabNavigator<RouteParamList>()
