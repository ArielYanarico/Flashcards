import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { white, lightblue } from '../utils/colors';
import * as deckActions from '../actions/deck';

class AddDeck extends Component {

  state = {
    text: ''
  }

  submit = () => {
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
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
          onPress={this.submit}>
            <Text style={styles.submitBtnText} autoCapitalize='characters'>submit</Text>
        </TouchableOpacity>
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
  },
  iosSubmitBtn: {
    backgroundColor: lightblue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40

  },
  androidSubmitBtn: {
    backgroundColor: lightblue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 45,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
});

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, deckActions)(AddDeck);
