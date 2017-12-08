import React, { Component } from 'react';
import { StyleSheet, Platform, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, lightblue, red } from '../utils/colors';
import * as deckActions from '../actions/card';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    empty: false
  }

  addNewCard = () => {
    const { navigation, addCard, cards } = this.props;
    const { deck } = navigation.state.params;
    addCard({...this.state, deck});
    this.setState({question: '', answer: ''});
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {
        title: deck,
        numberOfCards: cards.filter(card => card.deck === deck).length + 1
      }
    }));
  }

  render() {
    const { question, answer, empty } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
        {empty && <Text style={styles.empty}>All fields are required!</Text>}
        <View style={styles.btnContainer}>
          <ActionBtn
            onSubmit={question && answer ? this.addNewCard : () => this.setState({empty: true})}
            text='Submit'
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: white,
  },
  btnContainer: {
    alignSelf: 'center',
    marginTop:20
  },
  textInput: {
    height: 45,
    padding: 5,
    marginTop:20
  },
  empty:{
    color: red,
    textAlign: 'center'
  }
});

const mapStateToProps = ({ cards }) => ({cards});

export default connect(mapStateToProps, deckActions)(AddCard);
