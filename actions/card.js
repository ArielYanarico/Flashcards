import asyncStore from 'react-native-simple-store';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const CARDS = 'cards';

function getCardsAction(cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  }
}

function addCardAction(card) {
  return {
    type: ADD_CARD,
    card
  }
}

export function getCards() {
  return async (dispatch) => {
    const gottenCards = await asyncStore.get(CARDS);
    gottenCards
      ? dispatch(getCardsAction(gottenCards))
      : dispatch(getCardsAction([]));
  }
}

export function addCard(card) {
  return async (dispatch) => {
    await asyncStore.push(CARDS, card);
    dispatch(addCardAction(card));
  }
}
