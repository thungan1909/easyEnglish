import { FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-64">
      <div className="flex items-center space-x-3">
        <FaSearch />
        <input
          type="text"
          placeholder="Search lessons..."
          className="border-none focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell />
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
