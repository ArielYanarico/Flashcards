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

export function getQuestions() {
  return async (dispatch) => {
    const gottenQuestions = await asyncStore.get(QUESTIONS);
    gottenQuestions
      ? dispatch(getQuestionsAction(gottenQuestions))
      : dispatch(getQuestionsAction([]));
  }
}

export function addQuestion(question) {
  console.log('middleware', question);
  return async (dispatch) => {
    await asyncStore.push(QUESTIONS, question);
    dispatch(addQuestionAction(question));
  }
}
