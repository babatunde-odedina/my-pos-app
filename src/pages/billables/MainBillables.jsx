import { useState } from 'react';
import { MdOutlineGamepad } from 'react-icons/md';
import { TbBrandAppleArcade } from 'react-icons/tb';
import { ImSpoonKnife } from 'react-icons/im';
import { SlHandbag } from 'react-icons/sl';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';

const MainBillables = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: 'Attractions', icon: MdOutlineGamepad },
    { name: 'Arcades', icon: TbBrandAppleArcade },
    { name: 'Edibles', icon: ImSpoonKnife },
    { name: 'Bundles', icon: SlHandbag },
    { name: 'Events', icon: MdOutlineEventAvailable },
    { name: 'Products*', icon: AiOutlineProduct },
  ];

  return (
    <div className='flex h-screen p-4'>
      {/* Category Selection - 60% Width */}
      <div className='w-full md:w-3/5 p-4 rounded-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold'>Choose Category</h2>
          <input
            type='text'
            placeholder='Search categories...'
            className='p-2 border border-gray-300 rounded-md'
          />
        </div>
        {/* Category Items */}
        <div className='flex flex-wrap gap-4'>
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 w-32 h-32 rounded-lg cursor-pointer border-2 transition-all ${
                  isActive
                    ? 'border-customBlue text-customBlue'
                    : 'border-transparent text-textColor'
                } hover:border-customBlue hover:text-customBlue hover:bg-transparent`}
                style={{ backgroundColor: isActive ? 'transparent' : 'white' }}
                onClick={() => setActiveCategory(category.name)}
              >
                <Icon
                  size={30}
                  className={isActive ? 'text-customBlue' : 'text-textColor hover:text-customBlue'}
                />
                <span className='mt-2'>{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Section - 40% Width */}
      <div className='w-full md:w-2/5 bg-white p-4 shadow-lg rounded-lg ml-4'>
        <h2 className='text-2xl font-semibold mb-4'>Order</h2>
        {/* Add your order content here */}
        <div className='space-y-4'>
          {/* Example Order Items */}
          <div className='p-2 bg-gray-100 rounded'>Order Item 1</div>
          <div className='p-2 bg-gray-100 rounded'>Order Item 2</div>
          <div className='p-2 bg-gray-100 rounded'>Order Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default MainBillables;
