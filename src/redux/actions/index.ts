export const SET_EMAIL = 'SET_EMAIL';
export const SET_COIN = 'SET_COIN';

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
