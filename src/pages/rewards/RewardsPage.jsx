import { useState } from 'react';
import { FaAward } from 'react-icons/fa';
import { CiGrid2H } from 'react-icons/ci';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import { GoTrash } from 'react-icons/go';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';
import { BsBank } from 'react-icons/bs';
import Modal from 'react-modal';
import PaymentOption from '../../components/PaymentOption';

Modal.setAppElement('#root');

const items = [
  {
    category: 'Rewards',
    name: 'Roller Coaster',
    price: '50 Points',
    mcPrice: '$45',
    img: 'https://example.com/rollercoaster.jpg',
  },
  {
    category: 'Rewards',
    name: 'Ferris Wheel',
    price: '40 Points',
    mcPrice: '$35',
    img: 'https://example.com/ferriswheel.jpg',
  },
  {
    category: 'Rewards',
    name: 'Water Park Entry',
    price: '35 Points',
    mcPrice: '$30',
    img: 'https://example.com/waterpark.jpg',
  },
  {
    category: 'Rewards',
    name: 'Roller Coaster',
    price: '50 Points',
    mcPrice: '$45',
    img: 'https://example.com/rollercoaster.jpg',
  },
  {
    category: 'Rewards',
    name: 'Ferris Wheel',
    price: '40 points',
    mcPrice: '$35',
    img: 'https://example.com/ferriswheel.jpg',
  },
  {
    category: 'Rewards',
    name: 'Water Park Entry',
    price: '35 Points',
    mcPrice: '$30',
    img: 'https://example.com/waterpark.jpg',
  },
  {
    category: 'Rewards',
    name: 'Zipline Adventure',
    price: '55 Points',
    mcPrice: '$50',
    img: 'https://example.com/zipline.jpg',
  },
  {
    category: 'Rewards',
    name: 'Skydiving Experience',
    price: '150 Points',
    mcPrice: '$135',
    img: 'https://example.com/skydiving.jpg',
  },
  {
    category: 'Rewards',
    name: 'Amusement Park Pass',
    price: '75 Points',
    mcPrice: '$70',
    img: 'https://example.com/amusementpark.jpg',
  },
  {
    category: 'Rewards',
    name: 'Hot Air Balloon Ride',
    price: '200 Points',
    mcPrice: '$180',
    img: 'https://example.com/hotairballoon.jpg',
  },
  {
    category: 'Rewards',
    name: 'Safari Adventure',
    price: '100 Points',
    mcPrice: '$90',
    img: 'https://example.com/safari.jpg',
  },
  {
    category: 'Rewards',
    name: 'Aquarium Visit',
    price: '30 Points',
    mcPrice: '$27',
    img: 'https://example.com/aquarium.jpg',
  },
  {
    category: 'Rewards',
    name: 'Museum Tour',
    price: '20 Points',
    mcPrice: '$18',
    img: 'https://example.com/museum.jpg',
  },
];

const RewardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Rewards'); // Set default to "Rewards"
  const [view, setView] = useState('grid');
  const [cartItems, setCartItems] = useState([]); // State to hold cart items
  const [isAddingDiscount, setIsAddingDiscount] = useState(false); // Toggle for discount input
  const [discount, setDiscount] = useState(0); // Discount value
  const [amountPaid, setAmountPaid] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isEnteringId, setIsEnteringId] = useState(false);
  const [enteredId, setEnteredId] = useState('');

  const categories = [{ name: 'Rewards', icon: FaAward }];

  // Function to add item to cart
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItemIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove item at index
    setCartItems(updatedCart);
  };

  // Function to update quantity of item in cart
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return acc + price * item.quantity;
    }, 0);
  };

  const calculateMcSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const mcPrice = parseFloat(item.mcPrice.replace('$', ''));
      return acc + mcPrice * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const mcSubtotal = calculateMcSubtotal();
  const total = subtotal.toFixed(2);
  const mcTotal = (mcSubtotal - discount).toFixed(2);
  const rewardPoints = Math.floor(mcTotal / 10); // Example: 1 point per $10 spent
  const change = amountPaid && parseFloat(amountPaid) - total;

  const handlePaymentClick = (paymentMethod) => {
    if (paymentMethod === 'card' || paymentMethod === 'bank transfer') {
      setSelectedPayment(paymentMethod);
      setModalIsOpen(true);
    } else {
      setSelectedPayment(paymentMethod);
    }
  };

  const getButtonClasses = (paymentMethod) => {
    return `flex flex-col items-center bg-customBlue bg-opacity-10 p-4 rounded-lg cursor-pointer hover:border-customBlue border-2 w-1/4 ${
      selectedPayment === paymentMethod ? 'border-customBlue' : ''
    }`;
  };

  return (
    <div className='flex h-screen px-3'>
      {/* Category Selection - 60% Width */}
      <div className='w-full md:w-5/6 p-4 rounded-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold'>Choose Category</h2>
          <input
            type='text'
            placeholder='Search categories...'
            className='p-2 border border-gray-300 rounded-md'
          />
        </div>
        {/* Category Cards */}
        <div className='flex flex-wrap gap-4'>
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 w-32 h-32 rounded-lg cursor-pointer border-2 transition-all ${
                  isActive
                    ? 'border-customBlue text-customBlue bg-customBlue bg-opacity-10'
                    : 'border-transparent text-textColor bg-white'
                } hover:border-customBlue hover:text-customBlue hover:bg-customBlue hover:bg-opacity-10`}
                // style={{ backgroundColor: isActive ? 'transparent' : 'white' }}
                onClick={() => setActiveCategory(category.name)}
              >
                <Icon
                  size={30}
                  className={
                    isActive
                      ? 'text-customBlue'
                      : 'text-textColor hover:text-customBlue'
                  }
                />
                <span className='mt-2'>{category.name}</span>
              </div>
            );
          })}
        </div>

        {/* Items List */}
        <div className=''>
          <div className='flex justify-between items-center mt-4'>
            <h3 className='text-xl font-semibold'>{activeCategory} List</h3>
            <div className='flex justify-end items-center'>
              <CiGrid2H
                size={24}
                className='cursor-pointer mx-2 hover:border-customBlue hover:border-2 hover:text-customBlue'
                onClick={() => setView('list')}
              />
              <BsGrid3X3Gap
                size={24}
                className='cursor-pointer mx-2 hover:border-customBlue hover:border-2 hover:text-customBlue'
                onClick={() => setView('grid')}
              />
            </div>
          </div>

          <div className='mt-4 overflow-y-auto max-h-[400px]'>
            {view === 'grid' ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
                {items
                  .filter((item) => item.category === activeCategory)
                  .map((item, index) => (
                    <div
                      key={index}
                      className='border p-4 rounded-lg flex flex-col bg-white'
                    >
                      <div className='flex flex-row'>
                        <img
                          src={item.img}
                          alt={item.name}
                          className='w-34 h-24 object-cover mr-4'
                        />
                        <div className='flex flex-col justify-between flex-1 ml-10'>
                          <div className='pb-6'>
                            <h4 className='text-lg font-semibold'>
                              {item.name}
                            </h4>
                          </div>
                          <div>
                            <div className='flex justify-between'>
                              <p className='text-customBlue font-semibold text-xl mt-4'>
                                {item.price}
                              </p>
                              <button
                                className='bg-customBlue text-white px-4 py-2 rounded-lg'
                                onClick={() => addToCart(item)}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className='space-y-4'>
                {items
                  .filter((item) => item.category === activeCategory)
                  .map((item, index) => (
                    <div
                      key={index}
                      className='grid grid-cols-5 gap-4 border p-4 rounded-lg bg-white'
                    >
                      <p>{`${item.category.substring(0, 2).toUpperCase()}${index
                        .toString()
                        .padStart(4, '0')}`}</p>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{item.mcPrice}</p>
                      <span className='flex justify-end'>
                        <button
                          className='bg-customBlue text-white px-4 py-2 rounded-lg'
                          onClick={() => addToCart(item)}
                        >
                          Add
                        </button>
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Access Wallet - 40% Width */}
      <div className='w-full md:w-2/6 bg-white p-4 shadow-lg rounded-lg ml-4 relative fixed h-full '>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold '>Access Wallet</h2>
          <button className='text-red-600 font-semibold bg-red-100 rounded-lg p-2'>
            Cancel
          </button>
        </div>

        {/* Find ID */}
        <div className='flex w-full'>
          {!isEnteringId ? (
            <div className='flex w-full space-x-4'>
              <button className='bg-customBlue text-white p-2 rounded-lg flex-1'>
                Scan ID
              </button>
              <button
                className='bg-customBlue text-white p-2 rounded-lg flex-1'
                onClick={() => setIsEnteringId(true)}
              >
                Enter ID
              </button>
            </div>
          ) : (
            <div className='flex w-full space-x-4'>
              <input
                type='text'
                value={enteredId}
                onChange={(e) => setEnteredId(e.target.value)}
                className='border p-2 rounded-lg flex-1'
                placeholder='Enter ID'
              />
              <button
                className='bg-customBlue text-white p-2 rounded-lg flex-1'
                onClick={() => {
                  // Handle find ID logic here
                  console.log(`Finding ID: ${enteredId}`);
                }}
              >
                Find
              </button>
            </div>
          )}
        </div>

        {/* Display Cart Items */}
        <div className='flex justify-between items-center mt-4 mb-2'>
          <h2 className='text-2xl font-semibold'>Rewards List</h2>
          <button
            onClick={clearCart}
            className='text-red-600 font-semibold bg-red-100 rounded-lg p-2'
          >
            Clear all
          </button>
        </div>
        <div className=' mb-2 overflow-y-auto max-h-[470px]'>
          {cartItems.map((item, index) => (
            <div key={index} className='flex p-2 rounded-lg'>
              {/* Item Image */}
              <img
                src={item.img}
                alt={item.name}
                className='w-24 h-14 object-cover rounded-md mr-4'
              />
              {/* Item Info */}
              <div className='flex flex-col justify-between flex-grow'>
                <h3 className='text-lg font-semibold'>{item.name}</h3>
                {/* Quantity Controls */}
                <div className='flex items-center space-x-2 mt-2'>
                  <button
                    onClick={() =>
                      updateQuantity(
                        index,
                        item.quantity > 1 ? item.quantity - 1 : 1
                      )
                    }
                    className='p-2 rounded-lg bg-gray-200 text-gray-600'
                  >
                    <TiMinusOutline size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    className='p-2 rounded-lg bg-gray-200 text-gray-600'
                  >
                    <TiPlusOutline size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    className='text-red-600 bg-red-200 p-2 rounded-lg'
                  >
                    <GoTrash size={16} />
                  </button>
                </div>
              </div>
              {/* Prices */}
              <div className='flex justify-between mt-2'>
                <div>
                  <p className='text-customBlue font-semibold text-lg'>
                    {item.price}
                  </p>
                  <p className='text-gray-300'>{item.mcPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Bottom Order Summary */}
        <div className='absolute bottom-0 left-0 right-0 bg-white p-4 border-t-2'>
          <div className='space-y-2 justify-center'>
            <div className='flex justify-between'>
              <p className='text-lg'>Subtotal</p>
              <p className='text-lg font-semibold'>{subtotal.toFixed(2)}</p>
            </div>

            <div className='flex justify-between'>
              <p className='text-lg font-semibold'>Total:</p>
              <p>
                <span className='text-textColor text-sm'>MC {mcTotal}</span>
                <span className='font-bold ml-6 text-lg'> {total}</span>
              </p>
            </div>

            <button className='bg-customBlue text-white w-full p-4 rounded-lg mt-6'>
              Complete Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
