import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import {
    productDetailsReducers,
    productListReducers,
} from "./reducers/productReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    users: userLoginReducer,
});
export default reducer;
