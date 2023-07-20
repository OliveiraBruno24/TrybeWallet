import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCoins from '../utils/endPointAPI';
import { setCoin } from '../redux/actions';
import { GlobalState } from '../types';

function WalletForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCoinsList = async () => {
      const data = await getCoins();
      const { USDT, ...newData } = data;
      dispatch(setCoin(Object.keys(newData)));
    };
    getCoinsList();
  }, []);
  const moedas = useSelector((state:GlobalState) => state.wallet.currencies);

  return (
    <div>
      <label htmlFor="value-input"> Despesas: </label>
      <input
        type="text"
        id="value-input"
        placeholder="50,00"
        data-testid="value-input"
      />
      <label htmlFor="description-input"> descrição da despesa: </label>
      <input
        type="text"
        id="description-input"
        placeholder="ifood"
        data-testid="description-input"
      />
      <label htmlFor="currency-input">Moeda</label>
      <select
        id="currency-input"
        data-testid="currency-input"
      >
        {moedas.map((coin, index) => (
          <option key={ index } value={ coin }>
            {coin}
          </option>
        ))}
      </select>

    </div>
  );
}

export default WalletForm;
