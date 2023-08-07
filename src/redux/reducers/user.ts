import { AnyAction } from 'redux';
import { SET_EMAIL } from '../actions';
import { RootStateProps } from '../../types';

const INITIAL_STATE = {
  email: '',
  user: '',
  wallet: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction):RootStateProps => {
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
export default userReducer;
