import { Button } from "./Button";

export default function Card({ children, registrationStep, handleNextStep }) {
  const { buttonText, title } = registrationStep;
  return (
    <div className="bg-gray-dark/70 border border-gray-light rounded shadow-lg">
      <h1 className="text-lg p-3.5">{title}</h1>
      {children}
      <div className="flex flex-col items-center mt-8 pb-9">
        <Button buttonText={buttonText} onClick={handleNextStep} />
      </div>
    </div>
  );
}
