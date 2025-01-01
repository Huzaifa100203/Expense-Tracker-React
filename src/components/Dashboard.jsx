import React from "react";

const Dashboard = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);
  let income = amounts
    .filter((item) => item > 0)
    .reduce((p, c) => p + Math.abs(c), 0);
  console.log(income);
  let expense = amounts
    .filter((item) => item < 0)
    .reduce((p, c) => p - Math.abs(c), 0);
  console.log(expense);
  let balance = income + expense;
  // amounts.reduce((p, c) => p + Math.abs(c), 0);
  console.log(balance);
  if (!amounts) {
    income = 0;
    expense = 0;
    balance = 0;
  }
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };
  return (
    <div className="container-fluid p-0">
      <div className="bg-secondary text-center py-3 rounded-top w-100">
        <h1 className="fs-1 text-light m-0">Expense Tracker</h1>
      </div>

      <div className="balance text-center py-4 bg-warning h-100">
        <h3 className="fs-1">Your Balance</h3>
        <h1 className="fs-1">{formatAmount(balance)}</h1>
      </div>

      <div className="d-flex bg-light border-top border-bottom w-100">
        <div className="w-50 text-center bg-success py-2">
          <h3 className="text-light fs-2">Income</h3>
          <h2>{formatAmount(income)}</h2>
        </div>
        <div className="w-50 text-center bg-danger py-2">
          <h3 className="text-light fs-2">Expense</h3>
          <h2>{formatAmount(Math.abs(expense))}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
