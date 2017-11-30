import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as deckActions from '../actions/deck';
import { white, lightblue } from '../utils/colors';
import ListItem from './ListItem';

class DeckList extends Component {
  componentWillMount() {
    this.props.getDecks(['React', 'JavaScript']);
  }

  openDeck = (title) => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {title}
    }));
  }

  render() {
    const { decks } = this.props;
    const renderDecks = decks.map(deck => ({deck}));
    console.log(decks.length)

    return (
      <View style={styles.container}>
        {decks.length > 1
          ? <FlatList
              data={renderDecks}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => <ListItem title={item.deck} onTouch={this.openDeck}/>}
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

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, deckActions)(DeckList);
