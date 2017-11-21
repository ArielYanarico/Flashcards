import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import thunk from 'redux-thunk';
import { white, blue } from './utils/colors';
import reducer from './reducers';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: white,
  }
})

const Navigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      header: null
    }
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: blue, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={blue} barStyle="light-content" />
          </View>
          <Navigator/>
        </View>
      </Provider>
    );
  }
}

export default App;
