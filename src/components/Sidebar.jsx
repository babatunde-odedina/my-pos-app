import { NavLink, useLocation } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { PiCirclesThreeBold } from 'react-icons/pi';
import { LuHistory } from 'react-icons/lu';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { RiSettings2Line } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb';
import Logo from '../assets/maxlogo.png';

const Sidebar = () => {
  const location = useLocation();

  // Function to determine if NavLink is active
  const isActiveLink = (path) => {
    if (location.pathname.startsWith('/home')) {
      return path === '/home';
    }
    return location.pathname === path;
  };

  // NavLink component with dynamic styling based on active state
  const CustomNavLink = ({ to, icon: Icon, label }) => (
    <NavLink
      to={to}
      className={`flex flex-col items-center p-1 rounded-md transition-all duration-200 hover:bg-hoverColor hover:bg-opacity-10 ${
        isActiveLink(to) ? 'bg-hoverColor bg-opacity-10' : ''
      }`}
    >
      <Icon size={20} />
      <span className='mx-2'>{label}</span>
    </NavLink>
  );

  return (
    <aside className='w-1/10 bg-customBlue text-white flex flex-col items-center p-2'>
      {/* Logo */}
      <img src={Logo} alt='Logo' className='mb-12 w-12 h-12 rounded-md' />

      {/* Navigation Links */}
      <nav className='flex flex-col space-y-2 flex-1 w-full mb-20'>
        <CustomNavLink to='/home' icon={GoHome} label='Home' />
        <CustomNavLink
          to='/billables'
          icon={PiCirclesThreeBold}
          label='Billables'
        />
        <CustomNavLink to='/history' icon={LuHistory} label='History' />
        <CustomNavLink
          to='/rewards'
          icon={MdOutlineCardGiftcard}
          label='Rewards'
        />
        <CustomNavLink to='/customers' icon={FaUserAlt} label='Customers' />
        <CustomNavLink to='/settings' icon={RiSettings2Line} label='Settings' />
      </nav>

      {/* Logout */}
      <div className='mt-10'>
        <CustomNavLink to='/logout' icon={TbLogout2} label='Logout' />
      </div>
    </aside>
  );
};

export default Sidebar;
