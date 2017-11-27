import asyncStore from 'react-native-simple-store';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

export const DECKS = 'decks';

function getDecksAction(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

function addDeckAction(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function getDecks() {
  return async (dispatch) => {
    const gottenDecks = await asyncStore.get(DECKS);
    gottenDecks ? dispatch(getDecksAction(gottenDecks)) : dispatch(getDecksAction([]));
  }
}

export function addDeck(deck) {
  return async (dispatch) => {
    await asyncStore.push(DECKS, deck)
    dispatch(addDeckAction(deck));
  }
}
