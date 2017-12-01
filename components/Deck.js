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
    navigation.dispatch(NavigationActions.navigate({routeName: 'AddCard'}));
  }

  startNewQuiz = () => {
  }

  render() {
    const { navigation } = this.props;
    const { title } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <ActionBtn onSubmit={this.addNewCard} text='Add Card'/>
        <ActionBtn onSubmit={this.startNewQuiz} text='Start Quiz'/>
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
