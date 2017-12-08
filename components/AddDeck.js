import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, lightblue, gray, red } from '../utils/colors';
import * as deckActions from '../actions/deck';

class AddDeck extends Component {

  state = {
    text: '',
    empty: false
  }

  addNewDeck = () => {
    const { text } = this.state;
    const { addDeck, navigation } = this.props;

    addDeck(text);
    this.setState({text: ''});
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {
        title: text,
        numberOfCards: 0
      }
    }));
  }

  render() {
    const { text, empty } = this.state;

    return (
      <KeyboardAvoidingView
        behavior='position'
        style={styles.container}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.addDeckText}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Deck Title'
          value={text}
        />
        {empty && <Text style={styles.empty}>Deck title should not be empty!</Text>}
        <ActionBtn
          onSubmit={text ? this.addNewDeck : () => this.setState({empty: true})}
          text='Submit'
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: white,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textInput: {
    height: 45,
    alignSelf: 'stretch',
    padding: 5,
    marginBottom: 20
  },
  addDeckText: {
    fontSize: 40,
    textAlign: 'center',
    color: gray,
    padding: 30,
    paddingBottom: 20
  },
  empty:{
    color: red,
    textAlign: 'center'
  }
});

const mapStateToProps = ({ decks }) => ({decks});

export default connect(mapStateToProps, deckActions)(AddDeck);
