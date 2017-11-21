import { RECEIVE_DECKS } from '../actions/deck';

function decks(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECKS:
    console.log('reducer', action.decks);
      return action.decks;

    default:
      return state;
  }
}

export default decks;