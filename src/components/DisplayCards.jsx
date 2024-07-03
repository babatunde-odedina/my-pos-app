const DisplayCard = ({ title, subtitle, children }) => {
  return (
    <div className='bg-white rounded-xl shadow-md p-3 mb-2'>
      <h2 className='text-lg font-medium mb-2'>{title}</h2>
      <h1 className='text-2xl font-bold text-cardFontColor mb-4'>{subtitle}</h1>
      <p className='text-sm text-gray-600'>{children}</p>
    </div>
  );
};

export default DisplayCard;
