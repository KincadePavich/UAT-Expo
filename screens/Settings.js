import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Expo from 'expo';

class Settings extends Component {
  saveMSU() {
    const object = {
      name: 'MONTANA STATE UNIVERSITY',
      site: 'http://msubobcats.com/index.aspx',
      food: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      bars: 'http://universityaroundtown.com/wp-json/wp/v2/sld/504',
      shops: 'http://universityaroundtown.com/wp-json/wp/v2/sld/503',
      coffee: 'http://universityaroundtown.com/wp-json/wp/v2/sld/509',
      personal: 'http://universityaroundtown.com/wp-json/wp/v2/sld/508',
      specialty: 'http://universityaroundtown.com/wp-json/wp/v2/sld/506',
      ads: 'http://universityaroundtown.com/wp-json/wp/v2/ads?_embed',
      color: '#002469',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
    Expo.Util.reload();
  }
  saveUM() {
    const object = {
      name: 'UNIVERSITY OF MONTANA',
      site: 'http://gogriz.com/',
      food: 'http://universityaroundtown.com/wp-json/wp/v2/sld/859',
      bars: 'http://universityaroundtown.com/wp-json/wp/v2/sld/491',
      shops: 'http://universityaroundtown.com/wp-json/wp/v2/sld/503',
      coffee: 'http://universityaroundtown.com/wp-json/wp/v2/sld/509',
      personal: 'http://universityaroundtown.com/wp-json/wp/v2/sld/508',
      specialty: 'http://universityaroundtown.com/wp-json/wp/v2/sld/506',
      ads: 'http://universityaroundtown.com/wp-json/wp/v2/ads?_embed',
      color: '#810013',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
    Expo.Util.reload();
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headingStyle}>CHOOSE YOUR UNIVERSITY</Text>
        <TouchableOpacity onPress={this.saveMSU}>
         <Text style={styles.textStyle}>Montana State University</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.saveUM}>
           <Text style={styles.textStyle}>University of Montana</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 24,
    padding: 10,
    textAlign: 'center'
  },
  textStyle: {
    fontSize: 20,
    padding: 10,
  },
};

export default Settings;
