import { USER_INTERESTED_TOPICS } from "../constants";
import { Button, InterestButton } from "./Button";

export default function Interest({
  handleRegistrantTopics,
  selectedTopics,
  buttonText,
  title,
  handleNextStep,
}) {
  const topics = USER_INTERESTED_TOPICS;

  return (
    <>
      <h1 className="text-lg px-9 py-9">{title}</h1>
      <div className="flex flex-col px-2.5 space-y-3.5">
        {topics.map((topic, index) => (
          <InterestButton
            key={index}
            topic={topic}
            handleChange={handleRegistrantTopics}
          />
        ))}
      </div>
      <div className="flex flex-col items-center pt-3 pb-9">
        <Button
          type="button"
          buttonText={buttonText}
          handleChange={handleNextStep}
        />
      </div>
    </>
  );
}
