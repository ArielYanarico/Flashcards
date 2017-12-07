import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { white, gray, lightblue, blue } from '../utils/colors';

const DeckItem = ({ title, numberOfCards, onTouch }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onTouch.bind(this, title, numberOfCards)}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.numberText}>Cards {numberOfCards}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 50,
    margin: 5,
    paddingBottom: 15,
    borderBottomColor: "#CCC",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  titleText: {
    color: blue, 
    textAlign: 'center',
    fontSize: 18
  },
  numberText: {
    color: gray, 
    textAlign: 'center',
    fontSize: 14
  }
});

export default DeckItem;
