import { Indie_Flower } from "next/font/google";
import Button from "./Button";
import Form from "./Form";
import InterestButton from "./InterestButton";
import Summary from "./Summary";

export default function Card({
  registrantInfo,
  setRegistrantInfo,
  registrationStep,
  setRegistrationStep,
  allSteps,
}) {
  const { buttonText, title, step } = registrationStep;
  const { topics, name, email } = registrantInfo;

  const handleRegistrantTopics = (topic) => {
    if (!topics.includes(topic)) {
      setRegistrantInfo((prev) => ({
        ...prev,
        topics: [...topics, topic],
      }));
    }
  };

  const handleRegistrantInfo = (id, info) => {
    setRegistrantInfo((prev) => ({
      ...prev,
      [id]: info,
    }));
  };

  return (
    <div className="bg-gray-dark/70 border border-gray-light rounded shadow-lg">
      <h1 className="text-lg p-3.5">{title}</h1>
      {step === 1 ? (
        <Form
          handleRegistrantInfo={handleRegistrantInfo}
          registrant={name}
          email={email}
        />
      ) : (
        <></>
      )}
      {step == 2 ? (
        <InterestButton
          handleRegistrantTopics={handleRegistrantTopics}
          selectedTopics={topics}
        />
      ) : (
        <></>
      )}
      <Summary registrantInfo={registrantInfo} />
      <div className="flex flex-col items-center mt-8 pb-9">
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
