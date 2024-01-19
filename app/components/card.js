import Button from "./Button";
import Form from "./Form";
import InterestButton from "./InterestButton";

export default function Card({
  registrationStep,
  setTopic,
  setRegistrationStep,
  allSteps,
}) {
  const { buttonText, title, step } = registrationStep;

  return (
    <div className="bg-gray-dark/70 border border-gray-light rounded shadow-lg">
      <h1 className="text-lg p-3.5">{title}</h1>
      {step === 1 ? <Form /> : <></>}
      {step === 2 ? <InterestButton setTopic={setTopic} /> : <></>}
      <div className="flex flex-col items-center mt-8 pb-9">
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
