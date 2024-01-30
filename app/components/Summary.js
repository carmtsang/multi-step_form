export default function Summary({ registrantInfo }) {
  return (
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
  );
}
