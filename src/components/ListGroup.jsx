import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ transactions, removeTransaction, editTransaction }) => {
  return (
    <div className="px-3 py-2 my-2 w-100">
      <h2 className="h3 text-secondary m-0">Transaction History</h2>
      <ul className="list-group mt-2">
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            transaction={transaction}
            removeTransaction={removeTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
