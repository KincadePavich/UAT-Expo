import React, { Component } from 'react';
import { View, Image, Text, Linking, TouchableOpacity, AsyncStorage, Platform } from 'react-native';
import { Root } from './config/router';
import './global.js';

console.disableYellowBox = true;

class App extends Component {
  state = { school: Object, loaded: false };
  componentWillMount() {
    this.retrieveItem('schoolObj').then((current) => {
      this.setState({ school: current, loaded: true });
    }).catch((error) => {
      console.log('Unable to retrieve data: ' + error);
    });
  }
  async retrieveItem(key) {
    try {
      const schoolItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(schoolItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return;
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
        <Image style={styles.logoStyle} source={require('./media/UAT.png')} />
        { this.state.loaded &&
          <TouchableOpacity onPress={() => Linking.openURL(this.state.school.site)}>
            <Text style={styles.headingStyle}>
                {Object.values(this.state.school.name)}
            </Text>
          </TouchableOpacity>
        }
        <Root screenProps={this.state.school} />
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
