function Button({ disabled, children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` bg-yellow-400  inline-block py-3 px-4 rounded-full uppercase font-semibold hover:bg-yellow-600 transition-colors duration-300 ${type}`}
    >
      {children}
    </button>
  );
}

export default Button;
