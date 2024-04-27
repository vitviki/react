const Button = ({ label, bgColor, bdColor, textColor, iconURL }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none rounded-lg ${
        bgColor
          ? `${bgColor} ${textColor} ${bdColor}`
          : "bg-red-500 text-white border-red-500 hover:bg-red-600"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
