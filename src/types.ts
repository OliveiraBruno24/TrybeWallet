export interface RootState {
  email: any,
  user: any,
}

export interface WalletState {
  payload: any;
  type: any;
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit:number,
}

export interface GlobalState {
  user: RootState,
  wallet:WalletState
}
