import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return { title }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hey i am a Deck</Text>
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

export default Deck;
