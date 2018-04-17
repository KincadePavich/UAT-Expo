import React, { Component } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class Details extends Component {
  render() {
    const { qcopd_item_title,
      qcopd_item_subtitle,
      qcopd_item_link,
      qcopd_item_img_link,
      qcopd_item_lat,
      qcopd_item_long } = this.props.navigation.state.params;
    return (
      <ScrollView style={{ flex: 1, marginTop: -22 }}>
        <Text style={styles.headerStyle}>{qcopd_item_title}</Text>
        <Image style={styles.logoStyle} source={{ uri: qcopd_item_img_link }} />
        <Text style={styles.subtitleStyle}>10% Off Any Purchase</Text>
        <Text style={styles.textStyle}>
          Please show this screen to your cashier or server to obtain your discount.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL(qcopd_item_link)}>
          <Text style={styles.linkStyle}>{qcopd_item_title} Website</Text>
        </TouchableOpacity>
        <MapView
          initialRegion={{
            latitude: Platform.OS === 'ios' ? qcopd_item_lat : 45.6770,
            longitude: Platform.OS === 'ios' ? qcopd_item_long : -111.0429,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          style={styles.mapStyle}
        >
        <Marker
          key={qcopd_item_title}
          coordinate={{
            latitude: parseFloat(qcopd_item_lat),
            longitude: parseFloat(qcopd_item_long),
          }}
          title={qcopd_item_title}
          description='10% Off Any Purchase'
        />
        </MapView>
      </ScrollView>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 30,
    padding: 10,
  },
  subtitleStyle: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  logoStyle: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  linkStyle: {
    padding: 20,
    color: '#002469',
    fontSize: 20,
    textAlign: 'center',
  },
  mapStyle: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default Details;
