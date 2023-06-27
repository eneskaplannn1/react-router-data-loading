function Button({ disabled, children, className }) {
  return (
    <button
      disabled={disabled}
      className={` bg-yellow-400  inline-block py-3 px-4 rounded-full uppercase font-semibold hover:bg-yellow-600 transition-colors duration-300`}
    >
      {children}
    </button>
  );
}

export default Button;
