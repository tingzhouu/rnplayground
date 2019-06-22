import {AppRegistry} from 'react-native';
import AppRoot from './AppRoot';
import {name as appName} from './app.json';

import './reactotronconfig';

AppRegistry.registerComponent(appName, () => AppRoot);
