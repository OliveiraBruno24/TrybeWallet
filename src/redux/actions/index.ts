export const SET_EMAIL = 'SET_EMAIL';
export const SET_COIN = 'SET_COIN';
export const SET_EXPENSES = 'SET_EXPENSES';
export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';

export const SET_COTACAO = 'SET_COTACAO';

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

export const addCotacao = (cotacao:any) => ({
  type: SET_COTACAO,
  payload: cotacao,
});

// export const addToSum = ({expenses}:string) => ({
//   type: ADD_TO_SUM,
//   payload:
// })
