import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import thunk from 'redux-thunk';
import { white, lightblue } from './utils/colors';
import { setLocalNotification } from './utils/notification';
import reducer from './reducers';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import Deck from './components/Deck';
import Quiz from './components/Quiz';

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
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? lightblue : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : lightblue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const HeaderStyle = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: lightblue,
  }
};

const Navigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: HeaderStyle
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      ...HeaderStyle
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      ...HeaderStyle
    }
  }
})

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: lightblue, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={lightblue} barStyle="light-content" />
          </View>
          <Navigator/>
        </View>
      </Provider>
    );
  }
}

export default App;
