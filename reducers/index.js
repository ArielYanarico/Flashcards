import { decks } from './deck';
import { questions } from './question';
import { combineReducers } from 'redux';

export default combineReducers({
    decks,
    questions
});
