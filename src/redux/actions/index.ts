export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_BUTTON_ENABLED = 'SET_BUTTON_ENABLED';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});
