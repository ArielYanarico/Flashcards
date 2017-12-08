import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, NativeModules, Animated} from 'react-native';
import { gray, blue } from '../utils/colors';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class Card extends Component {
  state = {
    animatedValue: new Animated.Value(0)
  }

  componentWillUnmount() {
    this.state.animatedValue.removeAllListeners()
  }

  handleAction = () => {
    Animated.spring(this.state.animatedValue, {
      toValue: 0,
      velocity: 2,  
      tension: 5,
      friction: 2,
    }).start();
    this.props.onAction();
  }

  render() {
    const { cardText, actionText, onAction } = this.props;

    const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '0deg']
    });

    return (
      <Animated.View style={[styles.container, {transform: [{rotateX}]}]}>
        <Text style={styles.cardText}>{cardText}</Text>
        <TouchableOpacity onPress={this.handleAction}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: '80%',
    margin: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: blue,
  },
  cardText: {
    color: blue, 
    textAlign: 'center',
    fontSize: 30
  },
  actionText: {
    color: gray, 
    textAlign: 'center',
    fontSize: 15
  }
});

export default Card;
