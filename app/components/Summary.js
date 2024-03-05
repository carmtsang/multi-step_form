import { Button } from "./Button";

export default function Summary({
  registrantInfo,
  buttonText,
  handleNextStep,
}) {
  return (
    <>
      <div className="px-9">
        <p className="text-base text-tan">
          Name:
          <span className="text-white font-medium">{registrantInfo.name}</span>
        </p>
        <p className="text-base text-tan">
          Email:
          <span className="text-white font-medium">{registrantInfo.email}</span>
        </p>
        <p className="text-base text-tan">Topics: </p>
        <ul className="list-inside list-disc text-white font-medium">
          {registrantInfo.topics.length >= 1 &&
            registrantInfo.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
        </ul>
      </div>

      <Button
        type="button"
        buttonText={buttonText}
        handleChange={handleNextStep}
      />
    </>
  );
}
