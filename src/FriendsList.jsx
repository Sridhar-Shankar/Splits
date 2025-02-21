import { initialFriends } from "./data";
import Friend from "./Friend";

function FriendsList() {
  const friends = initialFriends;

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
