import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

function App() {
  const [transactions, setTransactions] = useState([
    // {
    //   id: 1,
    //   text: "Salary",
    //   amount: 500000,
    // },
    // {
    //   id: 2,
    //   text: "Entertainment",
    //   amount: -20000,
    // },
    // {
    //   id: 3,
    //   text: "Food",
    //   amount: -30000,
    // },
    // {
    //   id: 4,
    //   text: "Rent",
    //   amount: -50000,
    // },
    // {
    //   id: 5,
    //   text: "Profit",
    //   amount: 10000,
    // },
  ]);
  const [edit, setEdit] = useState({ text: {}, isEdit: false });

  const removeTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => {
        if (item.id !== id) {
          return true;
        }
      })
    );
  };

  const addTransactions = (name, amount) => {
    // console.log(name, amount);
    let newTransaction = [
      {
        id: crypto.randomUUID(),
        text: name,
        amount,
      },
    ];
    setTransactions([...newTransaction, ...transactions]);
  };

  const editTransaction = (transaction) => {
    setEdit({ text: transaction, isEdit: true });
  };

  const updateTransaction = (oldId, name, amount) => {
    setTransactions(
      transactions.map((item) =>
        item.id === oldId ? { id: oldId, text: name, amount: amount } : item
      )
    );
    setEdit({ text: {}, isEdit: false });
  };
  // console.log(transactions);
  return (
    <>
      <div className="container  shadow w-50 p-0">
        <Dashboard transactions={transactions} />

        <Form
          addTransactions={addTransactions}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <ListGroup
          transactions={transactions}
          removeTransaction={removeTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </>
  );
}

export default App;

{
  /* <div className="main-container">
        <div className="container">
          <div className="heading">
            <h1>Expense Tracker</h1>
          </div>
          <div className="balance">
            <h3>Your Balance</h3>
            <h1>$0.00</h1>
          </div>
          <div className="inc-exp">
            <div className="income">
              <h3>Income</h3>
              <h5>$0.00</h5>
            </div>
            <div className="expense">
              <h3>Expense</h3>
              <h5>$0.00</h5>
            </div>
          </div>

          <div className="transaction">
            <h2>Transaction History</h2>
          </div>
          <div className="add">
            <label htmlFor="trans-name">Add New Transaction
              <input type="text" id='trans-name' placeholder='Transaction Name' />
            </label>
            <input type="text" placeholder='Amount (negative for expense)' />
            <button>Add Transaction</button>
          </div>
        </div>
      </div> */
}
