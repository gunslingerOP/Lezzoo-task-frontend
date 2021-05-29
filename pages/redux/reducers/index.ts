import { combineReducers } from "redux";
import { shopReducer } from "./store.reducer";

const reducers = combineReducers({
  userShops: shopReducer,
});

export default reducers;
