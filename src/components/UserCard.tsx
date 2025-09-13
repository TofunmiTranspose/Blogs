import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
  person: { name: string; following: boolean };
  index: number;
}
const UserCard = ({ index, person }: UserCardProps) => {
  const [following, setFollowing] = useState(person.following);
  return (
    <div key={index} className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>
      <button
        onClick={() => setFollowing(!following)}
        className={`rounded-full text-sm py-1 px-2 ${
          following ? "bg-black text-white " : "bg-gray-200"
        }`}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
