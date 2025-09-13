const trends = [
  {
    title: "Be the Person You Are on Vacation",
    author: "Maren Torff",
  },
  {
    title: "Hate NFTs? I have some bad news...",
    author: "Zain Levin",
  },
  {
    title: "The real impact of dark UX patterns",
    author: "Lindsey Curtis",
  },
];

const TrendsList = () => {
  return <div className="bg-[#2E2B45] p-6 rounded-lg font-sans">
    <h3 className="font-semibold text-xl mb-4 text-white">Today's Top Trends</h3>
    <ul className="space-y-4">
      {trends.map((trend, i) => (
        <li key={i} className="flex flex-col">
          <span className="font-medium text-white">{trend.title}</span>
          <span className="text-sm text-gray-400">By {trend.author}</span>
        </li>
      ))}
    </ul>
  </div>;
};

export default TrendsList;