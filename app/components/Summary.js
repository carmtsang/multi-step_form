import { Button } from "./Button";

export default function Summary({
  registrantInfo,
  title,
  buttonText,
  handleNextStep,
}) {
  return (
    <>
      <h1 className="text-lg px-9 py-9">{title}</h1>
      <div>
        <p>Name: {registrantInfo.name}</p>
        <p>Email: {registrantInfo.email}</p>
        <p>Topics: </p>
        <ul>
          {registrantInfo.topics.length >= 1 &&
            registrantInfo.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col items-center pt-3 pb-9">
        <Button
          type="button"
          buttonText={buttonText}
          onClick={handleNextStep}
        />
      </div>
    </>
  );
}
