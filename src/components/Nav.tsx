import { FaSearch, FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full h-15 border-b border-gray-200 flex justify-between gap-10 items-center p-2 px-4">
      <div className="relative rounded-full pl-2 pr-6 py-1 w-80 border border-gray-100">
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="w-full focus:outline-none text-gray-500"
        />
        <label
          htmlFor="search"
          className="absolute top-1/4 right-2 text-gray-400"
        >
          <FaSearch size={20} />
        </label>
      </div>
      <div className="flex-justify-center items-center text-gray-800">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Nav;
