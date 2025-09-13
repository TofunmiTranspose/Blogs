import UserCard from "./UserCard";

const people = [
  { name: "Tofunmi Transpose", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-[#2E2B45] p-6 rounded-lg font-sans">
      <h3 className="font-semibold text-lg mb-4 text-white">People to follow</h3>
      <div className="space-y-4">
        {people.map((person, i) => (
          <UserCard key={person.name} person={person} index={i} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;