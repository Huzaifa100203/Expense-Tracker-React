import React from "react";

const ListItem = ({ transaction, removeTransaction, editTransaction }) => {
  return (
    <li
      className={
        transaction.amount > 0
          ? "list-group-item p-3 my-1 rounded bg-success text-light"
          : "list-group-item p-3 rounded bg-danger my-1 text-light"
      }>
      <h4>{transaction.text}</h4>
      <h1>{transaction.amount}</h1>
      <div className="float-end">
        <button className="btn btn-sm btn-warning mx-1"
        onClick={() => editTransaction(transaction)}>
            Edit</button>
        <button
          className="btn btn-sm bg-primary mx-1"
          onClick={() => removeTransaction(transaction.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
