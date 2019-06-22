/* global __DEV__ */
/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  networking,
  asyncStorage,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  Reactotron.clear();
  Reactotron
    .configure({
      name: 'RN Playground',
      // host: '192.168.1.108', // only needed when connecting to iOS device
    }) // controls connection & communication settings
    .use(
      reactotronRedux(),
      asyncStorage(),
    )
    .useReactNative(
      trackGlobalErrors(),
      openInEditor(),
      networking(),
    ) // add all built-in react native plugins
    .connect();// let's connect!
}

console = Reactotron