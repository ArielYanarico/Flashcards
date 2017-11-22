import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { white, lightblue } from '../utils/colors';
import * as deckActions from '../actions/deck';

class DeckList extends Component {
  componentWillMount() {
    this.props.getDecks(['React', 'JavaScript']);
  }

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        {decks.map((deck) => (
          <View key={deck} style={styles.deck}>
            <Text>{deck}</Text>
          </View>
        ))}
        <Text>Ups, it looks like you dont have any deck!</Text>
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
  deck: {
    backgroundColor: lightblue,
    color: white,
    textAlign: center,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
    height: 50,
    margin: 5
  } 
});

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, deckActions)(DeckList);
