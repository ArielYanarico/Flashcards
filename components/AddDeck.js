import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, lightblue, gray } from '../utils/colors';
import * as deckActions from '../actions/deck';

class AddDeck extends Component {

  state = {
    text: ''
  }

  addNewDeck = () => {
    const { text } = this.state;
    const { addDeck, navigation } = this.props;

    addDeck(text);
    this.setState({text: ''});
    navigation.dispatch(NavigationActions.back({key: 'AddDeck'}));
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.addDeckText}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Deck Title'
          value={text}
        />
        <ActionBtn onSubmit={this.addNewDeck} text='Submit'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 45,
    padding: 10,
    width: '80%'
  },
  addDeckText: {
    fontSize: 38,
    textAlign: 'center',
    color: gray
  }
});

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, deckActions)(AddDeck);
