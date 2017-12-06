import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';

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
  }

  render() {
    const { navigation } = this.props;
    const { title, numberOfCards } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{numberOfCards}</Text>
        <ActionBtn onSubmit={this.addNewCard} text='Add Card'/>
        <ActionBtn onSubmit={this.startNewQuiz} text='Start Quiz' disabled={numberOfCards < 1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Deck;
