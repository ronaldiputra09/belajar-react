const Button = (props) => {
  const {
    classname = "bg-black",
    children = "Button",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`${classname} hover:bg-red-700 text-white font-bold py-2 px-6 rounded`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
