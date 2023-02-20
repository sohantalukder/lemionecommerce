import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import {
    productDetailsReducers,
    productListReducers,
} from "./reducers/productReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    users: userLoginReducer,
    registration: userRegisterReducer,
});
export default reducer;
