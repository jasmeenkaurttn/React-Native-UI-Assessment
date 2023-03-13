import {createStore, combineReducers} from 'redux';
import { channelReducer } from './channelService/reducer';

const reducer = combineReducers({channelReducer});
const store = createStore(reducer);

export default store;