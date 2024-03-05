export function Button({ type, buttonText, handleChange }) {
  return (
    <button
      onClick={() => handleChange()}
      type={type}
      className="rounded-full bg-purple hover:bg-purple-dark text-white text-xs py-3 px-10"
    >
      {buttonText}
    </button>
  );
}

export function InterestButton({ topic, handleChange, buttonColor }) {
  return (
    <div className="px-6">
      <button
        type="button"
        value={topic}
        className={`${buttonColor} rounded-xl font-light w-full text-left text-sm py-3.5 px-4 border `}
        onClick={(e) => handleChange(e.target.value)}
      >
        {topic}
      </button>
    </div>
  );
}
