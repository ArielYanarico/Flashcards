import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { lightblue, white } from '../utils/colors';

const ActionBtn = ({ onSubmit, text }) => {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onSubmit}>
        <Text style={styles.submitBtnText} autoCapitalize='characters'>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: lightblue,
    padding: 10,
    borderRadius: 7,
    height: 35,
    marginLeft: 40,
    marginRight: 40

  },
  androidSubmitBtn: {
    backgroundColor: lightblue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 35,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white,
    fontSize: 14,
    textAlign: 'center'
  }
});

export default ActionBtn;
