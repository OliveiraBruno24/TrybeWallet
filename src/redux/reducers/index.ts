import { combineReducers } from 'redux';
import userReducer from './user';
import userWallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const combinedReducers = combineReducers({
  user: userReducer,
  wallet: userWallet,
});
export default combinedReducers;
