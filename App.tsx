import React from 'react'
import {StatusBar} from 'react-native'
import {DarkTheme, NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'

import TabNavigator from './src/navigation/TabNavigator.tsx'
import {store} from './src/store'

if (__DEV__) {
  // @ts-ignore
  import('./ReactotronConfig')
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </NavigationContainer>
  )
}

export default App
