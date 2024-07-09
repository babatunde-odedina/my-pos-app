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
          : 'bg-customBlue bg-opacity-10'
      }`}
      onClick={() => handlePaymentClick(text.toLowerCase())}
    >
      {icon}
      <p className='text-black mt-2 font-semibold text-center'>{text}</p>
    </div>
  );
};

export default PaymentOption;