function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 transition"
    >
      {text}
    </button>
  );
}

export default Button;