// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ExpensesProps } from '../../types';
import { SET_COIN, SET_EXPENSES, SET_SUM } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0,
  // cotacao: 0,
  total: 0,
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
        total: [...state.expenses, action.payload].reduce((
          acc: number,
          expense: ExpensesProps,
        ) => {
          const value = parseFloat(expense.value);
          const askValue = parseFloat(expense.exchangeRates[expense.currency].ask);
          const sumExpense = value * askValue;
          return acc + sumExpense;
        }, 0).toFixed(2),
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
