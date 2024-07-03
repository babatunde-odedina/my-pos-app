import { NavLink } from 'react-router-dom';

const MiniSalesTopbar = () => {
  return (
    <div className='px-3 mb-2 flex items-left bg-gray-100'>
      <NavLink
        to='/home/sales-report/general'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6'
          }`
        }
      >
        General
      </NavLink>
      <NavLink
        to='/home/sales-report/payment-type'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6'
          }`
        }
      >
        Payment Type
      </NavLink>
      <NavLink
        to='/home/sales-report/by-customer'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6'
          }`
        }
      >
        By Customer
      </NavLink>
      <NavLink
        to='/home/sales-report/by-employee'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6'
          }`
        }
      >
        By Employee
      </NavLink>
      <NavLink
        to='/home/sales-report/by-category'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-6'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-6'
          }`
        }
      >
        By Category
      </NavLink>
      <NavLink
        to='/home/sales-report/by-product'
        className={({ isActive }) =>
          `px-3 py-1 rounded ${
            isActive
              ? 'text-customBlue bg-customBlue bg-opacity-10 mr-4'
              : 'text-gray-600 hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10 mr-4'
          }`
        }
      >
        By Product
      </NavLink>
    </div>
  );
};

export default MiniSalesTopbar;
