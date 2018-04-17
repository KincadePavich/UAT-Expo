import React, { Component } from 'react';
import { View, Image, Text, Linking, TouchableOpacity } from 'react-native';
import { Root } from './config/router';
import './global.js';

console.disableYellowBox = true;

class App extends Component {
  state = { loaded: false };
  render() {
    return (
      <View style={{ flex: 1, borderTopWidth: 20, borderTopColor: '#fff' }}>
        <Image style={styles.logoStyle} source={require('./media/UAT.png')} />
        <TouchableOpacity onPress={() => Linking.openURL(global.school.site)}>
          <Text style={styles.headingStyle}>
            {Object.values(global.school)}
          </Text>
        </TouchableOpacity>
        <Root />
      </View>
    );
  }
}

const styles = {
  logoStyle: {
    alignSelf: 'center',
    height: 30,
    margin: 10,
    resizeMode: 'contain'
  },
  headingStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#000',
    paddingBottom: 15,
    textDecorationLine: 'underline',
  }
};

export default App;
