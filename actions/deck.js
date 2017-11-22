export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function getDecks() {
  return (dispatch) => {
    dispatch(receiveDecks(['React', 'JavaScript']));
    return;
  }
}
