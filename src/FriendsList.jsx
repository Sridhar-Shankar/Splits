/* eslint-disable react/prop-types */
import Friend from "./Friend";

function FriendsList({ friends, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}
export default FriendsList;
