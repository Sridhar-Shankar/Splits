import AddFriend from "./AddFriend";
import BillSplitting from "./BillSplitting";
import Button from "./Button";
import FriendsList from "./FriendsList";
import "./index.css";
import { initialFriends } from "./data";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);

  const handleNewFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleForm = () => {
    setShowForm((form) => !form);
  };

  return (
    <div className="app">
      <div>
        <FriendsList friends={friends} />

        {showForm && (
          <AddFriend onAddFriend={handleNewFriend} setShowForm={setShowForm} />
        )}

        <Button onClick={handleForm}>
          {showForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <BillSplitting />
    </div>
  );
}
export default App;
