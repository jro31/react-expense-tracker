import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses;
