import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, lightblue } from '../utils/colors';
import * as deckActions from '../actions/question';

class AddCard extends Component {

  state = {
    text: ''
  }

  addNewQuestion = () => {
    const { text } = this.state;
    const { navigation } = this.props;
    addQuestion(text);
    this.setState({text: ''});
    navigation.dispatch(NavigationActions.back({key: 'AddCard'}));
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Question'
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
    backgroundColor: white
  },
  textInput: {
    height: 45,
    padding: 10
  }
});

const mapStateToProps = ({ questions }) => {
  return {
    questions
  };
};

export default connect(mapStateToProps, deckActions)(AddCard);
