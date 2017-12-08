import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, gray, lightblue, blue } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/notification'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return { title }
  }

  addNewCard = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'AddCard',
      params: {deck: navigation.state.params.title}
    }));
  }

  startNewQuiz = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Quiz'
    }));
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const { navigation } = this.props;
    const { title, numberOfCards } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.numberText}>{numberOfCards} cards</Text>
        <View style={styles.btnContainer}>
          <ActionBtn
            onSubmit={this.addNewCard}
            text='Add Card'
          />
          <ActionBtn
            onSubmit={this.startNewQuiz}
            text='Start Quiz'
            disabled={numberOfCards < 1}
            color={blue}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flex: .5,
    justifyContent: 'flex-end'
  },
  titleText: {
    color: blue,
    textAlign: 'center',
    fontSize: 40
  },
  numberText: {
    color: gray,
    textAlign: 'center',
    fontSize: 30
  }
});

export default Deck;
