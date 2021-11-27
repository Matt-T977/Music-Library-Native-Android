/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Appbar,
} from 'react-native-paper'

class App extends Component {



  render() {
    return (
      <ScrollView>
        <Appbar.Header>
          <Appbar.Content title='&#119070; &#119136; | Music Library'/>
        </Appbar.Header>
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    )
  }
}


export default App;
