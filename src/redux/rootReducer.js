import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import productsReducer from "./products/productsReducer";

import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;
