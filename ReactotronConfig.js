import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native'
import {NativeModules} from 'react-native'
import {reactotronRedux} from 'reactotron-redux'

const oldConsoleLog = console.log

console.log = (...args) => {
  oldConsoleLog(...args)
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  })
}

const host = NativeModules?.SourceCode?.scriptURL
  ?.split('://')?.[1]
  ?.split(':')?.[0]

// configuration
const reactotron = Reactotron.configure({
  name: 'MyTSProject',
  host,
  // port: 9091
})
  .use(trackGlobalErrors({}))
  .use(openInEditor({}))
  .use(overlay())
  .use(asyncStorage({}))
  .use(reactotronRedux())
  .use(networking({}))
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /generate_204/,
    },
  })

if (__DEV__) {
  reactotron.connect()
  reactotron?.clear?.()
}

export default reactotron
