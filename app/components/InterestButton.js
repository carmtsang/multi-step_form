import { USER_INTERESTED_TOPICS } from "../constants";

export default function InterestButton({
  handleRegistrantTopics,
  selectedTopics,
}) {
  const topics = USER_INTERESTED_TOPICS;

  return (
    <div className="flex flex-col px-2.5 space-y-3.5">
      {topics.map((topic, index) => (
        <button
          key="index"
          type="button"
          value={topic}
          className="rounded-xl font-light text-left text-sm py-3 px-4 bg-gray/75 text-tan/75 border-gray-light border hover:bg-purple-dark hover:text-white hover:border-tan/75 focus:bg-purple-dark focus:text-white focus:border-tan/75"
          onClick={(e) => handleRegistrantTopics(e.target.value)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
