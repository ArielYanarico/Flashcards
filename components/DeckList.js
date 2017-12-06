import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as deckActions from '../actions/deck';
import * as questionActions from '../actions/question';
import { white, lightblue } from '../utils/colors';
import DeckItem from './DeckItem';

class DeckList extends Component {
  componentWillMount() {
    this.props.getDecks();
    this.props.getQuestions();
  }

  openDeck = (title) => {
    const { navigation, questions } = this.props;
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {
        title,
        cards: questions.filter(card => card.deck === title)}
    }));
  }

  render() {
    const { decks, questions } = this.props;
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
                cardNumber={questions.filter(card => card.deck === item.deck).length}
              />}
            />
          : <View style={styles.container}>
              <Text>Ups, it looks like you dont have any deck yet!</Text>
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
  }
});

const mapStateToProps = ({ decks, questions }) => {
  return {
    decks,
    questions
  };
};

export default connect(mapStateToProps, {...deckActions, ...questionActions})(DeckList);
