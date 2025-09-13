import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
  person: { name: string; following: boolean };
  index: number;
}
const UserCard = ({ index, person }: UserCardProps) => {
  const [following, setFollowing] = useState(person.following);
  return (
    <div key={index} className="flex items-center justify-between text-[#E0E0E0]">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-400" />
        <span>{person.name}</span>
      </section>
      <button
        onClick={() => setFollowing(!following)}
        className={`rounded-full text-sm py-1 px-3 font-semibold transition-colors duration-200 ${
          following ? "bg-gray-700 text-[#64FFDA]" : "bg-[#FF69B4] text-white"
        }`}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;