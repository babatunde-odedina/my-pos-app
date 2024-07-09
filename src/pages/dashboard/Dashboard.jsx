import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-30 bg-customBlue text-white flex flex-col z-30 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-1/12`}
      >
        <Sidebar />
      </aside>
      {/* Topbar */}
      <header className='fixed top-0 left-0 w-full bg-white z-20 shadow-md flex justify-between items-center md:left-[8.3%] md:w-[91.7%]'>
        <Topbar />
        <button className='p-4 md:hidden' onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </header>
      {/* Main Content */}
      <div
        className={`flex-1 overflow-auto mt-12 ml-0 md:ml-[8.3%] ${
          isSidebarOpen && 'overflow-hidden'
        }`}
      >
        <Outlet />
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
