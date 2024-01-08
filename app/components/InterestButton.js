import { USER_INTERESTED_TOPICS } from "../constants";

export default function InterestButton() {
  const topics = USER_INTERESTED_TOPICS;

  return (
    <div className="flex flex-col px-2.5 space-y-3.5">
      {topics.map((topic, index) => (
        <button
          key="index"
          className="rounded-xl bg-gray/75 font-light text-left text-tan/75 text-sm border-gray-light border py-3 px-4 hover:bg-purple hover:text-white hover:border-tan"
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
