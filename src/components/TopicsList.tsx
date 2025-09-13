const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];
const TopicsList = () => {
  return (
    <div className="bg-[#2E2B45] p-6 rounded-lg font-sans">
      <h3 className="font-semibold text-xl mb-4 text-white">Topics for you</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-[#FF69B4] text-white text-sm rounded-full cursor-pointer hover:bg-[#E65C9E] transition-colors duration-200"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
