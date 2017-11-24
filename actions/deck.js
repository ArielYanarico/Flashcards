import asyncStore from 'react-native-simple-store';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

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
    const a = await asyncStore.get('Flashcards:decks');
    console.log('get', a);

    dispatch(getDecksAction(['React', 'JavaScript']));
    return;
  }
}

export function addDeck(deck) {
  return async (dispatch) => {

    body = JSON.stringify({title: deck, questions: []});

    await asyncStore.save(deck, body)
    const a = await asyncStore.get('Flashcards:decks');
    console.log('get', a);

    dispatch(addDeckAction(body));
    return;
  }
}
