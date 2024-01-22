import React from 'react'
import {DarkTheme, NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'react-native'

import TabNavigator from './src/navigation/TabNavigator.tsx'

if (__DEV__) {
  // @ts-ignore
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle={'light-content'} />
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App
