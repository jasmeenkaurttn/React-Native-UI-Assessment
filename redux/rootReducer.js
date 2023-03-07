import {createStore, combineReducers} from 'redux';
import {cartItems} from './cartItems/reducer';

const reducer = combineReducers({cartItems});
const store = createStore(reducer);

export default store;