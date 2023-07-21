// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_COIN, SET_EXPENSES, SET_COTACAO, SET_SUM } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0,
  cotacao: 0,
};

const userWallet = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case SET_COIN:
      return {
        ...state,
        currencies: action.payload,
      };
    case SET_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case SET_COTACAO:
      return {
        ...state,
        cotacao: action.payload,
      };
    case SET_SUM:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};

export default userWallet;
