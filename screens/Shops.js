import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { Button } from '../components/Button';
import Ads from '../components/Ads';
import { Spinner } from '../components/Spinner';

class Shops extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
     axios.get(global.shops)
     .then(response => this.setState({ items: response.data, loaded: true }));
   }
  onPress = () => {
    this.props.navigation.navigate('ShopsMap');
  }
  onPressItem = (item) => {
    this.props.navigation.navigate('ShopDetails', { ...item });
  }
  renderList() {
    return (Object.values(this.state.items.protected_fields).map(item => (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <ListItem
          key={Object.values(item)[0]}
          roundAvatar
          avatar={{ uri: Object.values(item)[3] }}
          title={Object.values(item)[0]}
          subtitle={'10% Off Any Purchase'}
          titleStyle={{ flex: 2, flexWrap: 'wrap', width: '80%', flexDirection: 'column' }}
        />
      </TouchableOpacity>
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
            <List>
              {this.renderList()}
            </List>
          </ScrollView>
        }
        <View>
        <Ads />
        </View>
        <Button onPress={() => this.onPress()}>
          SHOW MAP VIEW
        </Button>
      </View>
    );
  }
}

export default Shops;
