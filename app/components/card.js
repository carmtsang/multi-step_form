import Button from "./Button";
import Form from "./Form";

export default function Card({ title, buttonText }) {
  return (
    <div className="bg-gray-dark/70 border border-gray-light max-w-sm rounded overflow-hidden shadow-lg">
      <h1>{title}</h1>
      <Form />
      <Button buttonText={buttonText} />
    </div>
  );
}
