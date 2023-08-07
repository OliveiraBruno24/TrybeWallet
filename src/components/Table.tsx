import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, updateExpense } from '../redux/actions';

function Table() {
  const { expenses } = useSelector((state:any) => state.wallet);
  const dispatch = useDispatch();

  const handleDelete = (
    event:React.MouseEvent<HTMLButtonElement, MouseEvent>,
    expenseIdToDelete: number,
  ) => {
    // const idSelect = expenses;
    // console.log(idSelect);
    // quando clico no botão, tenho acesso ao id que esta em wallet.expenses.id
    // basta fazer um find pelo id e remover ele do estado global.
    event.preventDefault();
    dispatch(deleteExpense(expenseIdToDelete));
  };

  const handleEditButton = (expense:any) => {
    dispatch(updateExpense(expense));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense: any) => {
          const cotacao = (expense.exchangeRates[expense.currency]?.ask);
          // console.log('exchangeRates', expense.exchangeRates);
          // console.log('com conchetes', expense.currency);
          return (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ Number(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>{ (cotacao * Number(expense.value)).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  onClick={ () => handleEditButton(expense) }
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  onClick={ (e) => handleDelete(e, expense.id) }
                >
                  Excluir

                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
