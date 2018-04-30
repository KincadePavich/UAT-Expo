import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { ScrollView, View } from 'react-native';
import { Button } from '../components/Button';
import Ads from '../components/Ads';
import { Spinner } from '../components/Spinner';

const styles = {
  mapStyle: {
    alignItems: 'center',
    height: 1000,
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1
  }
};

class FoodMap extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
     axios.get(global.food)
     .then(response => this.setState({ items: response.data, loaded: true }));
  }
  onPress = () => {
    this.props.navigation.navigate('Food');
  }
  createMarkers() {
    this.state.markers = [
      Object.values(this.state.items.protected_fields).map(item => (
        {
          coordinate: {
            latitude: Object.values(item)[4],
            longitude: Object.values(item)[5],
          }
        }
      ))
    ];
  }
  renderMap() {
    return (Object.values(this.state.items.protected_fields).map(item => (
      <Marker
        key={Object.values(item)[0]}
        coordinate={{
          latitude: parseFloat(Object.values(item)[4]),
          longitude: parseFloat(Object.values(item)[5]),
        }}
        title={Object.values(item)[0]}
        description={'10% Off Any Purchase'}
      />
    )));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      { !this.state.loaded &&
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Spinner size="large" />
        </View>
      }
      { this.state.loaded &&
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          <MapView
            initialRegion={{
              latitude: global.lat,
              longitude: global.long,
              latitudeDelta: 0.08,
              longitudeDelta: 0.08,
            }}
            style={styles.mapStyle}
          >
            {this.renderMap()}
          </MapView>
        </ScrollView>
      }
        <Ads />
        <Button onPress={() => this.onPress()}>
          SHOW LIST VIEW
        </Button>
      </View>
    );
  }
}

export default FoodMap;
