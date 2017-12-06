import { RECEIVE_CARDS, ADD_CARD } from '../actions/card';

export function cards(state = [], action) {
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;

    case ADD_CARD:
      return [...state, action.card];

    default:
      return state;
  }
}
