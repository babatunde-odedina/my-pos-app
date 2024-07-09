import { useState } from 'react';
import { MdOutlineGamepad } from 'react-icons/md';
import { TbBrandAppleArcade } from 'react-icons/tb';
import { ImSpoonKnife } from 'react-icons/im';
import { SlHandbag } from 'react-icons/sl';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { AiOutlineCreditCard, AiOutlineProduct } from 'react-icons/ai';
import { CiGrid2H } from 'react-icons/ci';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import { GoTrash } from 'react-icons/go';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';
import { BsBank } from 'react-icons/bs';
import Modal from 'react-modal';
import PaymentOption from '../../components/PaymentOption';
import { AiOutlineClose } from 'react-icons/ai';

Modal.setAppElement('#root');

const items = [
  {
    category: 'Attractions',
    name: 'Roller Coaster',
    price: '$50',
    mcPrice: '$45',
    img: 'https://example.com/rollercoaster.jpg',
  },
  {
    category: 'Arcades',
    name: 'Arcade Game',
    price: '$20',
    mcPrice: '$18',
    img: 'https://example.com/arcadegame.jpg',
  },
  {
    category: 'Edibles',
    name: 'Cotton Candy',
    price: '$5',
    mcPrice: '$4.5',
    img: 'https://example.com/cottoncandy.jpg',
  },
  {
    category: 'Bundles',
    name: 'Bundle Pack',
    price: '$30',
    mcPrice: '$27',
    img: 'https://example.com/bundlepack.jpg',
  },
  {
    category: 'Events',
    name: 'Concert Ticket',
    price: '$60',
    mcPrice: '$55',
    img: 'https://example.com/concertticket.jpg',
  },
  {
    category: 'Products',
    name: 'Souvenir',
    price: '$15',
    mcPrice: '$12',
    img: 'https://example.com/souvenir.jpg',
  },
  {
    category: 'Attractions',
    name: 'Ferris Wheel',
    price: '$40',
    mcPrice: '$35',
    img: 'https://example.com/ferriswheel.jpg',
  },
  {
    category: 'Edibles',
    name: 'Popcorn',
    price: '$3',
    mcPrice: '$2.5',
    img: 'https://example.com/popcorn.jpg',
  },
  {
    category: 'Arcades',
    name: 'Pinball Machine',
    price: '$25',
    mcPrice: '$22',
    img: 'https://example.com/pinballmachine.jpg',
  },
  {
    category: 'Attractions',
    name: 'Water Park Entry',
    price: '$35',
    mcPrice: '$30',
    img: 'https://example.com/waterpark.jpg',
  },
  {
    category: 'Events',
    name: 'Movie Ticket',
    price: '$12',
    mcPrice: '$10',
    img: 'https://example.com/movieticket.jpg',
  },
  {
    category: 'Products',
    name: 'T-shirt',
    price: '$20',
    mcPrice: '$18',
    img: 'https://example.com/tshirt.jpg',
  },
  {
    category: 'Attractions',
    name: 'Roller Coaster',
    price: '$50',
    mcPrice: '$45',
    img: 'https://example.com/rollercoaster.jpg',
  },
  {
    category: 'Attractions',
    name: 'Ferris Wheel',
    price: '$40',
    mcPrice: '$35',
    img: 'https://example.com/ferriswheel.jpg',
  },
  {
    category: 'Attractions',
    name: 'Water Park Entry',
    price: '$35',
    mcPrice: '$30',
    img: 'https://example.com/waterpark.jpg',
  },
  {
    category: 'Attractions',
    name: 'Zipline Adventure',
    price: '$55',
    mcPrice: '$50',
    img: 'https://example.com/zipline.jpg',
  },
  {
    category: 'Attractions',
    name: 'Skydiving Experience',
    price: '$150',
    mcPrice: '$135',
    img: 'https://example.com/skydiving.jpg',
  },
  {
    category: 'Attractions',
    name: 'Amusement Park Pass',
    price: '$75',
    mcPrice: '$70',
    img: 'https://example.com/amusementpark.jpg',
  },
  {
    category: 'Attractions',
    name: 'Hot Air Balloon Ride',
    price: '$200',
    mcPrice: '$180',
    img: 'https://example.com/hotairballoon.jpg',
  },
  {
    category: 'Attractions',
    name: 'Safari Adventure',
    price: '$100',
    mcPrice: '$90',
    img: 'https://example.com/safari.jpg',
  },
  {
    category: 'Attractions',
    name: 'Aquarium Visit',
    price: '$30',
    mcPrice: '$27',
    img: 'https://example.com/aquarium.jpg',
  },
  {
    category: 'Attractions',
    name: 'Museum Tour',
    price: '$20',
    mcPrice: '$18',
    img: 'https://example.com/museum.jpg',
  },
];

const MainBillables = () => {
  const [activeCategory, setActiveCategory] = useState('Attractions'); // Set default to "Attractions"
  const [view, setView] = useState('grid');
  const [cartItems, setCartItems] = useState([]); // State to hold cart items
  const [isAddingDiscount, setIsAddingDiscount] = useState(false); // Toggle for discount input
  const [discount, setDiscount] = useState(0); // Discount value
  const [amountPaid, setAmountPaid] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedBank, setSelectedBank] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const banks = ['Bank A', 'Bank B', 'Bank C']; // Example bank options

  const categories = [
    { name: 'Attractions', icon: MdOutlineGamepad },
    { name: 'Arcades', icon: TbBrandAppleArcade },
    { name: 'Edibles', icon: ImSpoonKnife },
    { name: 'Bundles', icon: SlHandbag },
    { name: 'Events', icon: MdOutlineEventAvailable },
    { name: 'Products*', icon: AiOutlineProduct },
  ];

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
  const tax = (subtotal * 0.075).toFixed(2); // 15% VAT
  const total = (subtotal + parseFloat(tax) - discount).toFixed(2);
  const mcTotal = (mcSubtotal + parseFloat(tax) - discount).toFixed(2);
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

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPayment(null);
  };

  const getButtonClasses = (paymentMethod) => {
    return `flex flex-col items-center bg-customBlue bg-opacity-10 p-4 rounded-lg cursor-pointer hover:border-customBlue border-2 w-1/4 ${
      selectedPayment === paymentMethod ? 'border-customBlue' : ''
    }`;
  };

  return (
    <div className='flex h-screen px-3'>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='flex justify-center items-center rounded-lg'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30'
        contentLabel='Payment Modal'
      >
        <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg w-full'>
          <div className='flex justify-between items-center mb-6'>
            {selectedPayment === 'card' && (
              <h2 className='text-2xl font-semibold'>Select a POS Bank</h2>
            )}
            {selectedPayment === 'bank transfer' && (
              <h2 className='text-2xl font-semibold'>Select a Bank</h2>
            )}
            <AiOutlineClose
              className='cursor-pointer ml-10'
              onClick={closeModal}
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='bank' className='block text-lg'>
              Select Bank
            </label>
            <select
              id='bank'
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className='border p-2 rounded w-full mt-2'
            >
              <option value=''>--Select Bank--</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
          <button
            className='bg-customBlue text-white w-full py-2 rounded-lg mt-4'
            onClick={closeModal}
            disabled={!selectedBank}
          >
            Complete
          </button>
        </div>
      </Modal>

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
        <div className='overflow-y-auto max-h-[600px]'>
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

          <div className='mt-4'>
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
                              <div>
                                <p className='text-customBlue font-semibold text-xl'>
                                  {item.price}
                                </p>
                                <p className='text-gray-300'>{item.mcPrice}</p>
                              </div>
                              <button
                                className='bg-customBlue text-white px-4 py-2 mt-4 rounded-lg'
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

      {/* Order Section - 40% Width */}
      <div className='w-full md:w-2/5 bg-white p-4 shadow-lg rounded-lg ml-4 relative fixed h-full '>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold '>Order</h2>
          <button
            onClick={clearCart}
            className='text-red-600 font-semibold bg-red-100 rounded-lg p-2'
          >
            Clear All
          </button>
        </div>

        {/* Display Cart Items */}
        <div className=' mb-2 overflow-y-auto max-h-[200px]'>
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
              <p className='text-lg'>VAT (7.5%)</p>
              <p className='text-lg font-semibold'>{tax}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg'>Discount:</p>
              {isAddingDiscount ? (
                <input
                  type='number'
                  className='border p-1 rounded'
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value))}
                  onBlur={() => setIsAddingDiscount(false)}
                />
              ) : (
                <p className=''>
                  <button
                    className='bg-customBlue text-white p-2 rounded-lg'
                    onClick={() => setIsAddingDiscount(true)}
                  >
                    Add
                  </button>
                </p>
              )}
            </div>
            <div className='flex justify-between'>
              <p className='text-lg font-semibold'>Total:</p>
              <p>
                <span className='text-textColor text-sm'>MC {mcTotal}</span>
                <span className='font-bold ml-6 text-lg'> {total}</span>
              </p>
            </div>
            {selectedPayment === 'cash' && (
              <>
                <hr />
                <div className='space-y-2 justify-center'>
                  <div className='flex justify-between'>
                    <p className='text-lg font-semibold'>Amount Paid</p>
                    {amountPaid ? (
                      <p className='text-lg font-semibold'>Change</p>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='flex justify-between'>
                    <input
                      type='number'
                      className='border p-1 rounded'
                      value={amountPaid}
                      onChange={(e) => setAmountPaid(e.target.value)}
                    />
                    {amountPaid ? (
                      <p className=' ml-6 text-lg text-customBlue'>
                        {change.toFixed(2)}
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </>
            )}
            <hr />
            <div className='flex justify-between'>
              <p className='text-lg'>Reward Points</p>
              <p className='text-lg font-semibold'>{rewardPoints} pts</p>
            </div>
            <hr />

            {selectedPayment === 'max credit' ? (
              <>
                <div className='flex justify-between'>
                  <p className='text-lg'>Access Wallet</p>
                  <span className=''>
                    <button className='bg-customBlue text-white p-2 rounded-lg'>
                      Scan ID
                    </button>
                    <button className='bg-customBlue text-white p-2 rounded-lg ml-4'>
                      Enter ID
                    </button>
                  </span>
                </div>
                <hr />
              </>
            ) : (
              <>
                <div className='flex justify-between'>
                  <p className='text-lg'>Link Account</p>
                  <span className=''>
                    <button className='bg-customBlue text-white p-2 rounded-lg'>
                      Register
                    </button>
                    <button className='bg-customBlue text-white p-2 rounded-lg ml-4'>
                      Link Account
                    </button>
                  </span>
                </div>
                <hr />
              </>
            )}
            <div>
              <h3 className='text-lg font-semibold'>Payment Method</h3>
            </div>
            <div className='flex justify-between gap-2'>
              <PaymentOption
                selectedPayment={selectedPayment}
                handlePaymentClick={handlePaymentClick}
                icon={<FaMoneyBillAlt className='text-customBlue text-4xl' />}
                text='Cash'
              />
              <PaymentOption
                selectedPayment={selectedPayment}
                handlePaymentClick={handlePaymentClick}
                icon={<CiCreditCard1 className='text-customBlue text-4xl' />}
                text='Card'
              />
              <PaymentOption
                selectedPayment={selectedPayment}
                handlePaymentClick={handlePaymentClick}
                icon={<BsBank className='text-customBlue text-4xl' />}
                text='Bank Transfer'
              />
              <div
                className={getButtonClasses('max credit')}
                onClick={() => handlePaymentClick('max credit')}
              >
                <span className='text-customBlue text-4xl'>MC</span>
                <p className='text-black mt-2 font-semibold'>Max Credit</p>
              </div>
            </div>
            <div className='flex justify-between mt-6'>
              <button className='bg-customBlue bg-opacity-10 text-black w-1/2 p-4 rounded-lg mr-2'>
                Save
              </button>
              <button className='bg-customBlue text-white w-full p-4 rounded-lg ml-4'>
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBillables;
