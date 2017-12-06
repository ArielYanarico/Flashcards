import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import ActionBtn from './ActionBtn';
import { white, lightblue } from '../utils/colors';
import Card from './Card';

class Quiz extends Component {
  state = {
    index: 0,
    isFlipped: false,
    score: 0
  }

  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  submitAnswer = (isCorrect) => {
    const { index, score } = this.state;
    const { cards } = this.props.navigation.state.params;

    console.log(index);
    console.log(cards.length);

    if (index < cards.length - 1)
      this.setState({index: index + 1});

    if (isCorrect)
      this.setState({score: score + 1});
  }

  getRandomAnswer(answer, answers) {
    const randomAnswer = answers[Math.floor(Math.random()*answers.length)];
    return answer === randomAnswer
      ? answer
      : [answer, randomAnswer][Math.floor(Math.random()*2)]
  }

  render() {
    const { index, isFlipped } = this.state;
    const { cards } = this.props.navigation.state.params;

    displayedAns = this.getRandomAnswer(cards[index].answer, cards.map(card => card.answer));
    console.log(displayedAns);

    return (
      <View style={styles.container}>
        {isFlipped
          ? <Card
              cardText={cards[index].answer}
              actionText='Question'
              onAction={this.flip}/>
          : <Card
              cardText={cards[index].question}
              actionText='Answer'
              onAction={this.flip}/>
        }
        <View style={styles.btnContainer}>
          <ActionBtn onSubmit={this.submitAnswer} text=' Correct '/>
          <ActionBtn onSubmit={this.submitAnswer} text='Incorrect'/>
        </View>
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
  btnContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Quiz;
