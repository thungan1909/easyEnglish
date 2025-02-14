import { FaBook, FaChartBar, FaCog, FaHome } from "react-icons/fa";

const Sidebard = () => {
  return (
    <div className="w-64 h-screen p-4  bg-gray-800 text-white fixed">
      <h2 className="text-xl font-bold mb-6">Easy English</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 p-2 hover:text-blue-500 cursor-pointer">
          <FaHome />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-3 p-2 hover:text-blue-500 cursor-pointer">
            <FaBook/>
          <span>Lessons</span>
        </li>
        <li className="flex items-center space-x-3 p-2 hover:text-blue-500 cursor-pointer">
            <FaChartBar/>
          <span>Progress</span>
        </li>
        <li className="flex items-center space-x-3 p-2 hover:text-blue-500 cursor-pointer">
            <FaCog/>
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebard;
