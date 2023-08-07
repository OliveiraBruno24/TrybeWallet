import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCoins from '../utils/endPointAPI';
import { addExpense, setCoin, editExpense } from '../redux/actions';
import { ReduxState } from '../types';
import { Inputt, WalletButton, Select } from '../styles';

function WalletForm() {
  const dispatch = useDispatch();
  const INITIAL_STATE = () => {
    setExpenses('');
    setDescription('');
    setCurrency('USD');
    setSelectedMethod('Dinheiro');
    setSelectedTag('Alimentação');
  };

  const [nextExpenseId, setNextExpenseId] = useState(0);
  const [expensess, setExpenses] = useState('');
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
  }, [dispatch]);
  const {
    currencies,
    idToEdit,
    editor,
  } = useSelector((state: ReduxState) => state.wallet);

  const handleAddExpenses = async () => {
    try {
      const data = await getCoins();
      setNextExpenseId((prevId) => prevId + 1);

      const newExpense = {
        id: nextExpenseId,
        value: expensess,
        description,
        currency,
        method: selectedMethod,
        tag: selectedTag,
        exchangeRates: {
          ...data,
        },
      };
      dispatch(addExpense(newExpense));

      INITIAL_STATE();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditExpense = async () => {
    try {
      const data = await getCoins();
      // setNextExpenseId((prevId) => prevId + 1);

      const EditedExpense = {
        id: idToEdit,
        value: expensess,
        description,
        currency,
        method: selectedMethod,
        tag: selectedTag,
        exchangeRates: {
          ...data,
        },
      };
      dispatch(editExpense(EditedExpense));

      INITIAL_STATE();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <label htmlFor="value-input"> Despesas: </label>
      <Inputt
        type="number"
        id="value-input"
        placeholder="50,00"
        data-testid="value-input"
        value={ expensess }
        onChange={ (event) => setExpenses(event.target.value) }
      />
      <label htmlFor="currency-input">Moeda: </label>

      <Select
        id="currency-input"
        data-testid="currency-input"
        onChange={ (event) => setCurrency(event.target.value) }
      >
        {currencies.map((coin, index) => (
          <option key={ index } value={ coin }>
            {coin}
          </option>
        ))}
      </Select>

      <label htmlFor="method"> Método de Pagamento: </label>

      <Select
        id="method"
        name="method"
        value={ selectedMethod }
        onChange={ (event) => setSelectedMethod(event.target.value) }
        data-testid="method-input"
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </Select>

      <label htmlFor="tag-input">Categoria: </label>
      <Select
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
      </Select>
      <label htmlFor="description-input"> Descrição: </label>
      <Inputt
        type="text"
        id="description-input"
        placeholder="ifood"
        data-testid="description-input"
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />
      {!editor
        ? (
          <WalletButton
            onClick={ handleAddExpenses }
          >
            Adicionar Despesa
          </WalletButton>
        )
        : (
          <WalletButton
            onClick={ handleEditExpense }
          >
            Editar Despesa
          </WalletButton>
        )}

    </div>
  );
}

export default WalletForm;

// Obs: 1- tirar depois as divs das labels depois e arrumar com css
// 2- trocar a escrita "moeda" por um icone de uma moeda girando
