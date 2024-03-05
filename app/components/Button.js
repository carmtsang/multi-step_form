export function Button({ type, buttonText, handleChange }) {
  return (
    <div className="flex flex-col items-center pt-3 pb-9">
      <button
        onClick={() => handleChange()}
        type={type}
        className="rounded-full bg-purple hover:bg-purple-dark text-white text-xs py-3 px-10"
      >
        {buttonText}
      </button>
    </div>
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
