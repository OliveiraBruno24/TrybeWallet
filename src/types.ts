export interface RootStateProps {
  email: any,
  user: any,
  wallet: any
}

export interface WalletStateProps {
  payload: any,
  type: any,
  currencies: [],
  expenses: ExpensesProps,
  editor: false,
  idToEdit:number,
}

export interface GlobalState {
  user: RootStateProps,
  wallet:WalletStateProps
}

export interface ExpensesProps {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: object,
}

export interface Expense {
  id: number,
  value: number,
  currency: string,
  method: string,
  tag: string,
  description: string,
  exchangeRates: object,
}

export interface Wallet {
  currencies: string[],
  expenses: Expense[],
  editor: boolean,
  idToEdit: number,
}

export interface ReduxState {
  user: string,
  wallet: Wallet,
}
