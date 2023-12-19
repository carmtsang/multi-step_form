import Button from "./Button";

export default function Card({ title, buttonText }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h1>{title}</h1>
      <Button buttonText={buttonText} />
    </div>
  );
}
