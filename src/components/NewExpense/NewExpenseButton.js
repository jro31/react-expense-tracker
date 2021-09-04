const NewExpenseButton = (props) => {
  const buttonClickHandler = () => {
    props.onButtonClick(true);
  }

  return (
    <button onClick={buttonClickHandler}>Add new expense</button>
  )
};

export default NewExpenseButton;
