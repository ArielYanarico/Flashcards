import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { white, lightblue } from './colors';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';

const HeaderStyle = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: lightblue,
  }
}

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

export default Navigator;
