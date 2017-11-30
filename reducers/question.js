import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/question';

export function questions(state = [], action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;

    case ADD_QUESTION:
      return [...state, action.question];

    default:
      return state;
  }
}
