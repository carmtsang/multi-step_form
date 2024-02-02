import { USER_INTERESTED_TOPICS } from "../constants";
import { InterestButton } from "./Button";

export default function Interest({ handleRegistrantTopics, selectedTopics }) {
  const topics = USER_INTERESTED_TOPICS;

  return (
    <div className="flex flex-col px-2.5 space-y-3.5">
      {topics.map((topic, index) => (
        <InterestButton
          key={index}
          topic={topic}
          handleChange={handleRegistrantTopics}
        />
      ))}
    </div>
  );
}
