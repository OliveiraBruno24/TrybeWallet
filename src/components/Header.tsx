import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootStateProps } from '../types';

function Header() {
  const rootState = useSelector((state:RootStateProps) => state);

  return (
    <div>
      <h2 data-testid="email-field">
        {rootState.user.email}
      </h2>
      <h3 data-testid="total-field">
        {rootState.wallet.total}
      </h3>
      <h3 data-testid="header-currency-field">
        moeda atual:
        BRL
      </h3>
    </div>
  );
}

export default Header;
