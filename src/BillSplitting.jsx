/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function BillSplitting({ selectedFriend }) {
  const [billValue, setBillvalue] = useState("");
  const [paidByYou, setPaidByYou] = useState("");
  const [whoPaid, setWhoPaid] = useState("You");

  const paidByFriend = billValue > 0 ? billValue - paidByYou : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("spliting bill");
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        value={billValue}
        onChange={(e) => {
          setBillvalue(Number(e.target.value));
        }}
      />

      <label>🧍‍♂️Your expense</label>
      <input
        value={paidByYou}
        onChange={(e) => {
          setPaidByYou(Number(e.target.value));
        }}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name} expense</label>
      <input value={paidByFriend} disabled />

      <label>👯‍♀️Who is paying the bill?</label>
      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="You">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
export default BillSplitting;
