/* eslint-disable react/prop-types */
import Friend from "./Friend";

function FriendsList({ friends }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
}
export default FriendsList;
