import React, { useEffect, useState } from "react";

const Form = ({ addTransactions, edit, updateTransaction }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit === false) {
      addTransactions(name, amount);
    }else{
        updateTransaction(edit.text.id, name, amount)
    }
    setName("");
    setAmount("");
  };

  useEffect(() => {
    setName(edit.text.text)
    setAmount(edit.text.amount)
    console.log(name,amount)
  }, [edit])
  return (
    <form
      className=" w-100 border-bottom"
      style={{ padding: "30px", paddingBlock: "60px" }}
      onSubmit={(e) => handleSubmit(e)}>
      <h5 className="">Add New Transaction</h5>
      <input
        type="text"
        className="form-control fs-5"
        placeholder="Transaction Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="number"
        className="form-control fs-5 my-2"
        placeholder="Amount (negative for expense)"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />

      <button className="btn btn-success w-100 btn-lg" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default Form;
