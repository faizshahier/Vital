// light = white-blue button (like Submit), big = larger size
const Button = ({ text, light, big }) => {
  const color = light ? "bg-blue-50 text-blue-500" : "bg-blue-500 text-white";
  const size = big ? "px-14 py-5 text-xl" : "px-6 py-3 text-sm";
  return (
    <button className={`${color} ${size} rounded-full font-medium hover:opacity-90 cursor-pointer`}>
      {text}
    </button>
  );
};

export default Button;
