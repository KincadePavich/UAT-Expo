import React, { Component } from 'react';
import { Dimensions, Linking, TouchableHighlight, Image } from 'react-native';
import axios from 'axios';

class Ads extends Component {
  state = { ads: [], adURLs: [], adLinks: [] };
  componentWillMount() {
     axios.get(global.ads)
     .then(response => this.setState({ ads: response.data }));
   }
  getAds() {
    Object.values(this.state.ads).map(ad => (
      this.state.adURLs.push(Object.values(ad)[16]),
      this.state.adLinks.push(Object.values(ad)[17])
    ));
  }
  render() {
    this.getAds();
    const index = Math.floor(Math.random() * this.state.adURLs.length);
    return (
      <TouchableHighlight style={{ bottom: 43 }} onPress={() => Linking.openURL(this.state.adLinks[index])}>
        <Image
          source={{ uri: this.state.adURLs[index] }}
          style={{ aspectRatio: 4 / 1, width: Dimensions.get('window').width }}
        />
      </TouchableHighlight>
    );
  }
}

export default Ads;
