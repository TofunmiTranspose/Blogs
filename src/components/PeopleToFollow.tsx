import UserCard from "./UserCard";

const people = [
  { name: "Tofunmi Transpose", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People to follow</h3>
      <div className="space-y-4">
        {people.map((person, i) => (
          <UserCard key={person.name} person={person} index={i} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
