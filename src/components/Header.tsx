import { useSelector } from 'react-redux';
import { GlobalState, RootStateProps } from '../types';

function Header() {
  // const
  const rootState = useSelector((state:RootStateProps) => state);

  const sumExpenses = useSelector((state:GlobalState) => state.wallet.expenses);

  console.log('sumreturn', sumExpenses);

  const mapDespesas = () => {
    if (sumExpenses[0] === undefined) {
      return 0;
    }
    const totalExpenses = sumExpenses.reduce((
      acc: number,
      expense: { value: string; cotação: string; },
    ) => {
      const value = parseFloat(expense.value);
      const askValue = parseFloat(expense.cotação);
      const sumExpense = value * askValue;
      return acc + sumExpense;
    }, 0);
    return totalExpenses;
  };

  const totalExpenses = mapDespesas();

  console.log(totalExpenses);
  return (
    <div>
      <h2 data-testid="email-field">
        {rootState.user.email}
      </h2>
      <h3 data-testid="total-field">
        {totalExpenses}
      </h3>
      <h3 data-testid="header-currency-field">
        moeda atual:
        BRL
      </h3>
    </div>
  );
}

export default Header;
