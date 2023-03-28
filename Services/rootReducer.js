import {createStore, combineReducers, applyMiddleware} from 'redux';
import {products} from './products/reducer';
import { productData } from './productData/reducer';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    products,
    productData
});
const store = createStore(reducer,applyMiddleware(thunk));

export default store;