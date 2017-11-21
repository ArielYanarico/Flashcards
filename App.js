import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator/*, StackNavigator */} from 'react-navigation';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
//import Deck from './components/Deck';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
  },
  AddDeck: {
    screen: AddDeck,
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
})

/*const Navigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      header: null
    }
  }
})*/

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs/>
      </View>
    );
  }
}

export default App;
