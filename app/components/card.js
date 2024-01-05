import Button from "./Button";
import Form from "./Form";

export default function Card({ title, buttonText }) {
  return (
    <div className="bg-gray-dark/70 border border-gray-light max-w-sm rounded overflow-hidden shadow-lg">
      <h1 className="text-lg p-3.5">{title}</h1>
      <Form />
      <div class="flex flex-col items-center pb-9">
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
