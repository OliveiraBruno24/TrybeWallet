// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { AnyAction } from 'redux';
import { SET_EMAIL } from '../actions';
import { RootState } from '../../types';

const INITIAL_STATE = {
  email: '',
};

const reducer = (state = INITIAL_STATE, action: AnyAction):RootState => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
