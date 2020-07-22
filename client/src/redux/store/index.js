import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/user";
import filmReducer from "../reducers/film";
import episodeReducer from "../reducers/episode";
import transactionReducer from "../reducers/transaksi";
import promise from "redux-promise-middleware";

// Global state
const reducers = combineReducers({
  user: authReducer,
  film: filmReducer,
  episode: episodeReducer,
  transaction: transactionReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(promise)));

export default store;
