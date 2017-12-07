import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { lightblue, white } from '../utils/colors';

const ActionBtn = ({ onSubmit, text, disabled = false, color = lightblue}) => {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' 
        ? [styles.iosSubmitBtn, {backgroundColor: color}] 
        : [styles.androidSubmitBtn, {backgroundColor: color}]
      }
      onPress={onSubmit}
      disabled={disabled}>
        <Text style={styles.submitBtnText} autoCapitalize='characters'>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    padding: 10,
    borderRadius: 7,
    height: 35,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 35,
    marginTop: 12
  },
  submitBtnText: {
    color: white,
    fontSize: 14,
    textAlign: 'center'
  }
});

export default ActionBtn;
