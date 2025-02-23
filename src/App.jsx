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

  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleNewFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowForm(false);
  };

  const handleForm = () => {
    setShowForm((form) => !form);
  };

  const handleSelectFriend = (friend) => {
    // setSelectedFriend(friend);

    //selected is prevState
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowForm(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
        />

        {showForm && <AddFriend onAddFriend={handleNewFriend} />}

        <Button onClick={handleForm}>
          {showForm ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <BillSplitting
          onSplitBill={handleSplitBill}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}
export default App;
