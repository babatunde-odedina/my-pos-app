const Button = ({
  children,
  bgColor = 'bg-customBlue',
  textColor = 'text-white',
  hoverBgColor = 'hover:bg-opacity-90',
  hoverShadow = 'hover:shadow-md',
  ...props
}) => {
  return (
    <button
      className={`p-3 ${bgColor} ${textColor} rounded-lg ${hoverBgColor} ${hoverShadow}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
