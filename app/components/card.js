import { Button } from "./Button";

export default function Card({ children, registrationStep, handleNextStep }) {
  const { buttonText, title } = registrationStep;
  return (
    <div className="bg-gray/50 border border-gray-light rounded-lg shadow-lg">
      <h1 className="text-lg px-9 py-9">{title}</h1>
      {children}
      <div className="flex flex-col items-center pt-3 pb-9">
        <Button buttonText={buttonText} onClick={handleNextStep} />
      </div>
    </div>
  );
}
