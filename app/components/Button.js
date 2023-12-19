export default function Button({ buttonText }) {
  return (
    <button className="rounded-full bg-purple hover:bg-purple-dark text-white text-xs py-3 px-10">
      {buttonText}
    </button>
  );
}
