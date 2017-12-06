import { decks } from './deck';
import { cards } from './card';
import { combineReducers } from 'redux';

export default combineReducers({
    decks,
    cards
});
