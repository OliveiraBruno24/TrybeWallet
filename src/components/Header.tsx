import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const rootState = useSelector((state:RootState) => state);

  return (
    <div>
      <h2 data-testid="email-field">
        {rootState.user.email}
      </h2>
      <h3 data-testid="total-field">
        Gastos totais:
        {' '}
        {`${0}`}
      </h3>
      <h3 data-testid="header-currency-field">
        moeda atual:
        BRL
      </h3>
    </div>
  );
}

export default Header;
