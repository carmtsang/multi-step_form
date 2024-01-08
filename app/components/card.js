import Button from "./Button";
import Form from "./Form";
import InterestButton from "./InterestButton";

export default function Card({ title, buttonText }) {
  return (
    <div className="bg-gray-dark/70 border border-gray-light rounded shadow-lg">
      <h1 className="text-lg p-3.5">{title}</h1>
      {/* <Form /> */}
      <InterestButton />
      <div class="flex flex-col items-center pb-9">
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
