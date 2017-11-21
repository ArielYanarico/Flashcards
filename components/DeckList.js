import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
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

export default DeckList;
