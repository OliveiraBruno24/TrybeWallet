import calculateTotal from '../../components/calculaTotal';
import { Expense } from '../../types';
import { REMOVE_EXPENSE, SET_COIN, SET_EXPENSES, UPDATE_EXPENSE,
  EXPENSE_EDITED } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,
};

const userWallet = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case SET_COIN:
      return {
        ...state,
        currencies: action.payload,
      };
    case SET_EXPENSES: // plota o total na tela
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expenseId) => expenseId.id !== action.payload),
      };
    case UPDATE_EXPENSE:
      action.payload as Expense;
      return ({
        ...state,
        editor: true,
        idToEdit: action.payload.id,
      });
    case EXPENSE_EDITED:
      return ({
        ...state,
        editor: false,
        expenses:
          state.expenses.map((e) => (e.id === action.payload.id ? action.payload : e)),

      });
    default:
      return state;
  }
};

export default userWallet;
