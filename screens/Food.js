import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { Button } from '../components/Button';
import Ads from '../components/Ads';
import { Spinner } from '../components/Spinner';

class Foods extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
    this.retrieveItem('schoolObj').then((school) => {
      axios.get(school.food)
      .then(response => this.setState({ items: response.data, loaded: true }));
    }).catch((error) => {
      console.log('Unable to retrieve data: ' + error);
    });
  }
  onPress = () => {
    this.props.navigation.navigate('FoodMap');
  }
  onPressItem = (item) => {
    this.props.navigation.navigate('FoodDetails', { ...item });
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

export default Foods;
