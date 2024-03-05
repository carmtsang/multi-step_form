import { USER_INTERESTED_TOPICS } from "../constants";
import { Button, InterestButton } from "./Button";

export default function Interest({
  handleRegistrantTopics,
  selectedInterest,
  buttonText,
  title,
  handleNextStep,
}) {
  const topics = USER_INTERESTED_TOPICS;

  return (
    <>
      <div className="flex flex-col px-2.5 space-y-3.5">
        {topics.map((topic) => (
          <InterestButton
            key={topic}
            topic={topic}
            buttonColor={selectedInterest}
            handleChange={handleRegistrantTopics}
          />
        ))}
      </div>

      <Button
        type="button"
        buttonText={buttonText}
        handleChange={handleNextStep}
      />
    </>
  );
}
