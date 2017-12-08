import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import ActionBtn from './ActionBtn';
import { white, red, green, blue, lightblue } from '../utils/colors';
import Card from './Card';

class Quiz extends Component {
  state = {
    index: 0,
    isFlipped: false,
    score: 0,
    currentAnswer: null,
    displayResult: false,
    selectedCards: null
  }

  componentWillMount() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    const { cards } = this.props;
    this.setState({selectedCards: cards.filter(card => card.deck === deck)});
  }

  componentWillUpdate() {
    const { currentAnswer, index } = this.state;
    const { selectedCards } = this.state;
    currentAnswer || this.getRandomAnswer(selectedCards[index].answer, selectedCards.map(card => card.answer));
  }

  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  finish = () => {
    const { navigation } = this.props;
    const { selectedCards } = this.state;
    const { deck } = navigation.state.params;
    navigation.dispatch(NavigationActions.navigate({
      routeName: 'Deck',
      params: {
        title: deck,
        numberOfCards: selectedCards.length
      }
    }));
  }

  restart = () => {
    this.setState({
      index: 0,
      isFlipped: false,
      score: 0,
      currentAnswer: null,
      displayResult: false
    });
  }

  submitAnswer = (isCorrect) => {
    const { index, score, selectedCards } = this.state;

    index < selectedCards.length - 1
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
    const { index, isFlipped, currentAnswer, displayResult, score, selectedCards } = this.state;

    return (displayResult
      ? (<View style={styles.container}>
          <Text style={styles.resultText}>Congratulations, you have finished, your score is:</Text>
          <Text style={styles.resultTextScore}>{score}/{selectedCards.length}</Text>
          <View style={styles.btnContainer}>
            <ActionBtn
              onSubmit={this.restart}
              text='Restart Quiz'
            />
            <ActionBtn
              onSubmit={this.finish}
              text='Back to Deck'
            />
          </View>
        </View>)
      : (<View style={styles.container}>
          <Text>{index + 1}/{selectedCards.length}</Text>
          {isFlipped
            ? <Card
                cardText={currentAnswer}
                actionText='Question'
                onAction={this.flip}/>
            : <Card
                cardText={selectedCards[index].question}
                actionText='Answer'
                onAction={this.flip}/>
          }
          <View style={styles.btnContainer}>
            <ActionBtn
              onSubmit={this.submitAnswer.bind(this, selectedCards[index].answer === currentAnswer)}
              text=' Correct '
              color={green}
            />
            <ActionBtn
              onSubmit={this.submitAnswer.bind(this, selectedCards[index].answer !== currentAnswer)}
              text='Incorrect'
              color={red}
            />
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
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    color: lightblue,
    padding: 30
  },
  resultTextScore: {
    fontSize: 30,
    textAlign: 'center',
    color: blue
  }
});

const mapStateToProps = ({ cards }) => ({ cards });

export default connect(mapStateToProps)(Quiz);
