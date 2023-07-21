import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCoins from '../utils/endPointAPI';
import { addExpense, setCoin, addCotacao } from '../redux/actions';
import { GlobalState } from '../types';

function WalletForm() {
  const dispatch = useDispatch();

  const [nextExpenseId, setNextExpenseId] = useState(0);
  const [expenses, setExpenses] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('Dinheiro');
  const [selectedTag, setSelectedTag] = useState('Alimentação');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const getCoinsList = async () => {
      const data = await getCoins();
      const { USDT, ...newData } = data;
      dispatch(setCoin(Object.keys(newData)));
    };
    getCoinsList();
  }, []);
  const moedas = useSelector((state:GlobalState) => state.wallet.currencies);

  const handleAddExpress = async () => {
    try {
      const data = await getCoins();
      const { USDT, ...newData } = data;
      await console.log('retorno do newData', (newData[currency]));
      dispatch(addCotacao(newData[currency]));

      const newExpense = {
        id: nextExpenseId,
        value: expenses,
        description,
        currency,
        method: selectedMethod,
        tag: selectedTag,
        cotacao: newData[currency].ask,
        exchangeRates: {
          ...moedas,
        },
      };
      dispatch(addExpense(newExpense));
      setNextExpenseId((prevId) => prevId + 1);

      setExpenses('');
      setDescription('');
      setCurrency('USD');
      setSelectedMethod('Dinheiro');
      setSelectedTag('Alimentação');
    } catch (error) {
      console.log(error);
    }
  };

  // { id,
  // value,
  // currency,
  // method,
  // tag,
  // description,
  // exchangeRates;
  // }
  return (
    <div>
      <div>
        <label htmlFor="value-input"> Despesas: </label>
        <input
          type="number"
          id="value-input"
          placeholder="50,00"
          data-testid="value-input"
          value={ expenses }
          onChange={ (event) => setExpenses(event.target.value) }
        />
      </div>
      <div>
        <label htmlFor="description-input"> descrição da despesa: </label>
        <input
          type="text"
          id="description-input"
          placeholder="ifood"
          data-testid="description-input"
          value={ description }
          onChange={ (event) => setDescription(event.target.value) }
        />
      </div>
      <label htmlFor="currency-input">Moeda</label>
      <select
        id="currency-input"
        data-testid="currency-input"
        onChange={ (event) => setCurrency(event.target.value) }
      >
        {moedas.map((coin, index) => (
          <option key={ index } value={ coin }>
            {coin}
          </option>
        ))}
      </select>
      <div>
        <label htmlFor="method">Método de Pagamento:</label>
        <select
          id="method"
          name="method"
          value={ selectedMethod }
          onChange={ (event) => setSelectedMethod(event.target.value) }
          data-testid="method-input"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </div>
      <div>
        <label htmlFor="tag-input">Tag da desepesa:</label>
        <select
          id="tag-input"
          name="tag"
          value={ selectedTag }
          onChange={ (event) => setSelectedTag(event.target.value) }
          data-testid="tag-input"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </div>

      <div>
        <button
          onClick={ handleAddExpress }
        >
          Adicionar despesa

        </button>
      </div>

    </div>
  );
}

export default WalletForm;

// Obs: 1- tirar depois as divs das labels depois e arrumar com css
// 2- trocar a escrita "moeda" por um icone de uma moeda girando
