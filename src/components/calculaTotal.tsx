import { ExpensesProps } from '../types';

const calculateTotal = (expenses: ExpensesProps[]) => {
  return expenses.reduce((acc: number, expense: ExpensesProps) => {
    const value = parseFloat(expense.value);
    const askValue = parseFloat(expense.exchangeRates[expense.currency].ask);
    const sumExpense = value * askValue;
    return acc + sumExpense;
  }, 0).toFixed(2);
};

export default calculateTotal;
