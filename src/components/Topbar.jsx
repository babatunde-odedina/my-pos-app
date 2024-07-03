import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="bg-white p-2 flex justify-between items-center">
      <div className="flex space-x-4">
        <NavLink
          to="/home/dashboard"
          className={({ isActive }) =>
            `text-black px-3 py-1 rounded ${
              isActive ? 'text-customBlue' : 'hover:text-customBlue'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/home/sales-report"
          className={({ isActive }) =>
            `text-black px-3 py-1 rounded ${
              isActive ? 'text-customBlue' : 'hover:text-customBlue'
            }`
          }
        >
          Sale Reports
        </NavLink>
      </div>
    </div>
  );
};

export default Topbar;
