import React, { Component } from 'react';
import { Text, View } from 'react-native';

import App from './src/App';

class AppRoot extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

export default AppRoot;
