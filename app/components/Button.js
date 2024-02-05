export function Button({ buttonText, onClick }) {
  return (
    <button
      onClick={() => onClick()}
      className="rounded-full bg-purple hover:bg-purple-dark text-white text-xs py-3 px-10"
    >
      {buttonText}
    </button>
  );
}

export function InterestButton({ topic, handleChange }) {
  return (
    <div className="px-6">
      <button
        type="button"
        value={topic}
        className="rounded-xl font-light w-full text-left text-sm py-3.5 px-4 bg-gray/75 text-tan/75 border-gray-light border hover:bg-purple-dark hover:text-white hover:border-tan/75 focus:bg-purple-dark focus:text-white focus:border-tan/75"
        onClick={(e) => handleChange(e.target.value)}
      >
        {topic}
      </button>
    </div>
  );
}
