import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import ActionBtn from './ActionBtn';
import { white, lightblue } from '../utils/colors';
import Card from './Card';

class Quiz extends Component {
  state = {
    index: 0,
    isFlipped: false,
    score: 0,
    currentAnswer: null,
    displayResult: false
  }

  componentWillUpdate() {
    const { currentAnswer, index } = this.state;
    const { cards } = this.props;
    currentAnswer || this.getRandomAnswer(cards[index].answer, cards.map(card => card.answer));
  }

  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  submitAnswer = (isCorrect) => {
    const { index, score } = this.state;
    const { cards } = this.props;

    index < cards.length - 1 
      ? this.setState({index: index + 1, isFlipped: false})
      : this.setState({displayResult: true})

    isCorrect && this.setState({score: score + 1});

    this.setState({currentAnswer: null});
  }

  getRandomAnswer(answer, answers) {
    const randomAnswer = answers[Math.floor(Math.random()*answers.length)];
    const random = answer === randomAnswer
      ? answer
      : [answer, randomAnswer][Math.floor(Math.random()*2)]

    this.setState({currentAnswer: random});
  }

  render() {
    const { index, isFlipped, currentAnswer, displayResult, score } = this.state;
    const { cards } = this.props;

    return (displayResult
      ? (<View style={styles.container}>
          <Text>Congratulations, you have finished, your score is: {score}/{cards.length}</Text>
        </View>)
      : (<View style={styles.container}>
          <Text>{index + 1}/{cards.length}</Text>
          {isFlipped
            ? <Card
                cardText={currentAnswer}
                actionText='Question'
                onAction={this.flip}/>
            : <Card
                cardText={cards[index].question}
                actionText='Answer'
                onAction={this.flip}/>
          }
          <View style={styles.btnContainer}>
            <ActionBtn onSubmit={this.submitAnswer.bind(this, cards[index].answer === currentAnswer)} text=' Correct '/>
            <ActionBtn onSubmit={this.submitAnswer.bind(this, cards[index].answer !== currentAnswer)} text='Incorrect'/>
          </View>
        </View>
      )
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

const mapStateToProps = ({ cards }) => {
  return {
    cards
  };
};

export default connect(mapStateToProps)(Quiz);
