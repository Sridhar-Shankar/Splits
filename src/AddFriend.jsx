/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

function AddFriend({ onAddFriend, setShowForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleAddFriend = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id, name, image, balance: 0 };
    onAddFriend(newFriend);

    setShowForm(false);
  };

  return (
    <form>
      <div className="form-add-friend">
        <p>
          <label>🧑‍🤝‍🧑Friend Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>🧑‍🤝‍🧑Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </p>
        <Button onClick={handleAddFriend}>Add</Button>
      </div>
    </form>
  );
}
export default AddFriend;
