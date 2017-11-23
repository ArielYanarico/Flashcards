import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { white, lightblue } from '../utils/colors';

class AddDeck extends Component {

  state = { 
    text: 'Placeholder'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Click Here To Add Some Decks</Text> 
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
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
  textInput: {
    height: 50, 
    //borderColor: lightblue, 
    borderWidth: 1
  }
});

export default AddDeck;
