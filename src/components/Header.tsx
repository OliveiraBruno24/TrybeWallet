import { useDispatch, useSelector } from 'react-redux';
import { GlobalState, RootStateProps } from '../types';
import { addSum } from '../redux/actions';

function Header() {
  // const
  const rootState = useSelector((state:RootStateProps) => state);

  const sumExpenses = useSelector((state:GlobalState) => state.wallet.expenses);

  console.log('sumreturn', sumExpenses);
  const dispatch = useDispatch();

  const mapDespesas = () => {
    console.log('retorno do sum', sumExpenses);
    if (sumExpenses[0] === undefined) {
      return 0;
    }
    const totalExpenses = sumExpenses.reduce((
      acc: number,
      expense: { value: string; cotacao: string; },
    ) => {
      const value = parseFloat(expense.value);
      const askValue = parseFloat(expense.cotacao);
      const sumExpense = value * askValue;
      return acc + sumExpense;
    }, 0);
    // dispatch(addSum(totalExpenses.toFixed(2)));
    return totalExpenses.toFixed(2);
  };

  return (
    <div>
      <h2 data-testid="email-field">
        {rootState.user.email}
      </h2>
      <h3 data-testid="total-field">
        {mapDespesas()}
      </h3>
      <h3 data-testid="header-currency-field">
        moeda atual:
        BRL
      </h3>
    </div>
  );
}

export default Header;
