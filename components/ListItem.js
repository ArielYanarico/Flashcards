import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { lightblue, white } from '../utils/colors';

const ListItem = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={{color: white, textAlign: 'center'}}>{title}</Text>
    </View>
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

export default ListItem;
