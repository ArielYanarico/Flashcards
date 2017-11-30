import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import SubmitBtn from './SubmitBtn';
import { white, lightblue } from '../utils/colors';
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
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Deck Name'
          value={text}
        />
        <SubmitBtn onSubmit={this.addNewDeck}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: white
  },
  textInput: {
    height: 45,
    padding: 10
  }
});

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, deckActions)(AddDeck);
