import { FaSearch, FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-15 bg-[#2E2B45] border-b border-gray-700 flex  sm:flex-row justify-between items-center p-2 px-4 gap-4 sm:gap-10">
      <div className="relative rounded-full pl-2 pr-6 py-1 w-full max-w-sm border border-gray-600 focus-within:ring-2 focus-within:ring-[#64FFDA] transition-all duration-300">
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="w-full bg-transparent focus:outline-none text-[#E0E0E0] placeholder-gray-400"
        />
        <label
          htmlFor="search"
          className="absolute top-1/4 right-2 text-gray-400"
        >
          <FaSearch size={20} />
        </label>
      </div>
      <div className="flex justify-center items-center text-[#E0E0E0] hover:text-[#64FFDA] transition-colors duration-300">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Nav;
