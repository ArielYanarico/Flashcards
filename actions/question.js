import asyncStore from 'react-native-simple-store';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTIONS = 'questions';

function getQuestionsAction(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestionAction(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function getQuestions(deck) {
  return async (dispatch) => {
    const gottenQuestions = await asyncStore.get(QUESTIONS);
    gottenQuestions 
      ? dispatch(getQuestionsAction(gottenQuestions.filter(q => q.deck === deck))) 
      : dispatch(getQuestionsAction([]));
  }
}

export function addQuestion(question) {
  return async (dispatch) => {
    await asyncStore.push(QUESTIONS, question);
    dispatch(addQuestionAction(question));
  }
}