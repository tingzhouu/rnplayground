import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { MMYYDatePicker } from './components'

class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>
        <MMYYDatePicker />
      </View>
    );
  }
}
export default App;
