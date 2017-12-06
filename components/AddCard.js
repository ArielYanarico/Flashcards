import React, { Component } from 'react';
import { StyleSheet, Platform, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, lightblue } from '../utils/colors';
import * as deckActions from '../actions/question';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  addNewQuestion = () => {
    const { navigation, addQuestion } = this.props;
    const { deck } = navigation.state.params;
    addQuestion({...this.state, deck});
    this.setState({question: '', answer: ''});
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {title: deck}
    }));
  }

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          placeholder='Question'
          value={question}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({answer})}
          placeholder='Answer'
          value={answer}
        />
        <ActionBtn onSubmit={this.addNewQuestion} text='Submit'/>
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
