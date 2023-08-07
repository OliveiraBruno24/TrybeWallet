import { useSelector } from 'react-redux';
import { ExpensesProps, RootStateProps } from '../types';

function Header() {
  const rootState = useSelector((state:RootStateProps) => state);

  const calculateTotal = rootState.wallet.expenses
    .reduce((acc: number, expense: ExpensesProps) => {
      const value = parseFloat(expense.value);
      const askValue = parseFloat(expense.exchangeRates[expense.currency].ask);
      const sumExpense = value * askValue;
      return acc + sumExpense;
    }, 0).toFixed(2);

  return (
    <header>
      <h2 data-testid="email-field">
        {rootState.user.email}
      </h2>
      <span data-testid="total-field">
        {calculateTotal}
      </span>
      <span data-testid="header-currency-field">
        {' BRL'}
      </span>
    </header>
  );
}

export default Header;
