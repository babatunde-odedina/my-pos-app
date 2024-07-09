const PaymentOption = ({
  selectedPayment,
  handlePaymentClick,
  icon,
  text,
}) => {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-lg cursor-pointer border-2 w-1/4 ${
        selectedPayment === text.toLowerCase()
          ? 'bg-customBlue bg-opacity-10 border-customBlue'
          : 'bg-gray-100'
      }`}
      onClick={() => handlePaymentClick(text.toLowerCase())}
    >
      {icon}
      <p className='text-black mt-2 font-semibold'>{text}</p>
    </div>
  );
};

export default PaymentOption;