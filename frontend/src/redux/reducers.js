import { combineReducers } from 'redux';
import { cartReducer } from './reducers/cartReducers';
import {
	productDetailsReducers,
	productListReducers,
} from './reducers/productReducers';

const reducer = combineReducers({
	productList: productListReducers,
	productDetails: productDetailsReducers,
	cart: cartReducer,
});
export default reducer;
