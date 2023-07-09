import React from "react";
import css from "./App.module.css";

import Profile from "../Profile";
import Statistics from "../Statistics/";
import FriendList from "../FriendList/";
import TransactionHistory from "../TransactionHistory";

import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

const App = () => {
  return (
    <div className={css.container}>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
