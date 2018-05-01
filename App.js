import React, { Component } from 'react';
import { View, Image, Text, Linking, TouchableOpacity, StatusBar } from 'react-native';
import { Root } from './config/router';
import './global.js';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          hidden
        />
        <View style={styles.headerStyle}>
          <Image style={styles.logoStyle} source={require('./media/UAT.png')} />
          <TouchableOpacity onPress={() => Linking.openURL(global.site)}>
            <Text style={styles.headingStyle}>
              {Object.values(global.school)}
            </Text>
          </TouchableOpacity>
        </View>
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
    color: '#002469',
    paddingBottom: 15,
    textDecorationLine: 'none',
  },
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#eeec24'
  }
};

export default App;
