import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { lightblue, white } from '../utils/colors';

const DeckItem = ({ title, numberOfCards, onTouch }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onTouch.bind(this, title, numberOfCards)}>
      <Text style={{color: white, textAlign: 'center'}}>{title}</Text>
      <Text style={{color: white, textAlign: 'center'}}>Cards {numberOfCards}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: lightblue,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
    height: 50,
    margin: 5
  }
});

export default DeckItem;
