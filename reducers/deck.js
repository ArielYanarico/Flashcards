import { RECEIVE_DECKS, ADD_DECK } from '../actions/deck';

export function decks(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;

    case ADD_DECK:
      return [];

    default:
      return state;
  }
}
