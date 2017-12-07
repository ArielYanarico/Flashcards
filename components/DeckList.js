import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as deckActions from '../actions/deck';
import * as cardActions from '../actions/card';
import { white, lightblue, gray } from '../utils/colors';
import DeckItem from './DeckItem';

class DeckList extends Component {
  componentWillMount() {
    this.props.getDecks();
    this.props.getCards();
  }

  openDeck = (title, numberOfCards) => {
    const { navigation, cards } = this.props;
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {
        title,
        numberOfCards
      }
    }));
  }

  render() {
    const { decks, cards } = this.props;
    const renderDecks = decks.map(deck => ({deck}));

    return (
      <View style={styles.container}>
        {decks.length > 0
          ? <FlatList
              data={renderDecks}
              keyExtractor={(item, index) => index}
              renderItem={({item}) =>
              <DeckItem
                title={item.deck}
                onTouch={this.openDeck}
                numberOfCards={cards.filter(card => card.deck === item.deck).length}
              />}
            />
          : <View style={styles.container}>
              <View style={styles.noDecks}>
                <Text style={styles.noDecksText}>Ups, it looks like you dont have any deck yet!</Text>
              </View>
            </View>}
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
  noDecks: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  noDecksText: {
    fontSize: 40,
    textAlign: 'center',
    padding: 30,
    color: gray
  }
});

const mapStateToProps = ({ decks, cards }) => {
  return {
    decks,
    cards
  };
};

export default connect(mapStateToProps, {...deckActions, ...cardActions})(DeckList);
