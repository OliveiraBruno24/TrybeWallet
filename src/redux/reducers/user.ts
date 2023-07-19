import { AnyAction } from 'redux';
import { SET_EMAIL } from '../actions';
import { RootState } from '../../types';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction):RootState => {
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
