import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import NewExpenseButton from './NewExpenseButton';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = (showFormBool) => {
    setShowForm(showFormBool);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {showForm === false && <NewExpenseButton onButtonClick={showFormHandler} />}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={showFormHandler} />}
    </div>
  )
};

export default NewExpense;
