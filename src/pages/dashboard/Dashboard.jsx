import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'; // Adjust path
import Topbar from '../../components/Topbar'; // Assume you have a Topbar component

const Dashboard = () => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside className='fixed top-0 left-0 h-full w-1/10 bg-customBlue text-white flex flex-col'>
        <Sidebar />
      </aside>
      {/* Topbar */}
      <header className='fixed top-0 left-[8.1%] w-full bg-white z-10 shadow-md'>
        <Topbar />
      </header>
      {/* Main Content */}
      <div className='ml-[8%] mt-16 flex-1 overflow-auto '>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
