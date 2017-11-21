import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as deckActions from '../actions/deck';

class DeckList extends Component {
  componentWillMount() {
    this.props.getDecks();
    console.log('mount', this.props);
  }

  render() {
    console.log('render', this.props);

    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props)}</Text>
        <Text>Ups, it looks like you dont have any deck!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, deckActions)(DeckList);
