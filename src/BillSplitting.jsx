import Button from "./Button";

function BillSplitting() {
  return (
    <form>
      <div className="form-split-bill">
        <h2>Split a bill with x</h2>
        <div>
          <label>💰Bill value</label>
          <input />
        </div>
        <div>
          <label>🧍‍♂️Your expense</label>
          <input />
        </div>
        <div>
          <label>🧑‍🤝‍🧑x expense</label>
          <input disabled />
        </div>
        <div>
          <label>👯‍♀️Who is paying the bill?</label>
          <select>
            <option value="you">You</option>
            <option value=""></option>
          </select>
        </div>
        <Button>Split bill</Button>
      </div>
    </form>
  );
}
export default BillSplitting;
