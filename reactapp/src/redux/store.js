import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import data_reducer from "./dataReducer";

const store = createStore(
  combineReducers({data_reducer}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
