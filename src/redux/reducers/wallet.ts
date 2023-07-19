// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { WalletState } from '../../types';
import { SET_COIN } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

const userWallet = (state = INITIAL_STATE, action:WalletState) => {
  switch (action.type) {
    case SET_COIN:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default userWallet;
