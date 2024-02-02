import Form from "./Form";
import Summary from "./Summary";
import { Button } from "./Button";
import Interest from "./Interest";

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
      {step === 2 ? (
        <Interest
          handleRegistrantTopics={handleRegistrantTopics}
          selectedTopics={topics}
        />
      ) : (
        <></>
      )}
      {step === 3 ? <Summary registrantInfo={registrantInfo} /> : <></>}
      <div className="flex flex-col items-center mt-8 pb-9">
        <Button buttonText={buttonText} />
      </div>
    </div>
  );
}
