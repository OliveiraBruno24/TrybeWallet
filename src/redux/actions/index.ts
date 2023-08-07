import { AnyAction } from 'redux';
import { ExpensesProps } from '../../types';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_COIN = 'SET_COIN';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const EXPENSE_EDITED = 'EXPENSE_EDITED';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setCoin = (currencies:string[]) => {
  return ({
    type: SET_COIN,
    payload: currencies,
  });
};

export const addExpense = (expenses:any) => ({
  type: SET_EXPENSES,
  payload: expenses,
});

export const deleteExpense = (id:number) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export const updateExpense = (payload: AnyAction) => ({
  type: UPDATE_EXPENSE,
  payload,
});

export const editExpense = (payload: ExpensesProps) => ({
  type: EXPENSE_EDITED,
  payload,
});
