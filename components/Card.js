import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { lightblue, white } from '../utils/colors';

class Card extends Component {
  render() {
    const { cardText, actionText, onAction } = this.props;

    return (
      <View>
        <Text>{cardText}</Text>
        <TouchableOpacity onPress={onAction}>
          <Text>{actionText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
