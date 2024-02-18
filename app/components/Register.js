import { Button } from "./Button";

function TextInput({ name, type, value, placeholder, handleChange }) {
  return (
    <div className="mb-5">
      <label for={name} className="block text-xs text-tan py-1 capitalize">
        {name}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        className="bg-transparent border-2 border-gray-light text-tan text-xs rounded-xl focus:ring-purple-dark focus:border-purple-dark block w-full p-3.5 my-1"
        placeholder={placeholder}
        required
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </div>
  );
}

export default function Register({
  registrant,
  handleRegistrantInfo,
  buttonText,
  title,
  handleNextStep,
}) {
  return (
    <>
      <h1 className="text-lg px-9 py-9">{title}</h1>
      <form
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        className="shadow-md rounded px-9"
      >
        <TextInput
          name="name"
          type="text"
          placeholder="enter your name"
          id="name"
          value={registrant}
          handleChange={handleRegistrantInfo}
        />
        <TextInput
          name="email"
          type="email"
          placeholder="example@gmail.com"
          id="email"
          handleChange={handleRegistrantInfo}
        />

        <div className="flex flex-col items-center pt-3 pb-9">
          <Button
            type="submit"
            buttonText={buttonText}
            onClick={handleNextStep}
          />
        </div>
      </form>
    </>
  );
}
