/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function BillSplitting({ selectedFriend, onSplitBill }) {
  const [billValue, setBillvalue] = useState("");
  const [paidByYou, setPaidByYou] = useState("");
  const [whoPaid, setWhoPaid] = useState("user");

  const paidByFriend = billValue ? billValue - paidByYou : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!billValue || !paidByYou) return;

    onSplitBill(whoPaid === "user" ? paidByFriend : -paidByYou);
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
          setPaidByYou(
            Number(e.target.value) > billValue
              ? paidByYou
              : Number(e.target.value)
          );
        }}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}&apos;s expense</label>
      <input value={paidByFriend} disabled />

      <label>👯‍♀️Who is paying the bill?</label>
      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
export default BillSplitting;
